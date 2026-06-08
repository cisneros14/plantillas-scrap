import { NextRequest, NextResponse } from "next/server";
import { isValidEcuadorianID } from "@/lib/validation";
import pool from "@/lib/db";

const SECAP_API_URL = "https://infoplacas.herokuapp.com/https://si.secap.gob.ec/sisecap/logeo_web/json/busca_persona_registro_civil.php";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cedula = searchParams.get("cedula");

  // 1. Validar que la cédula esté presente, tenga 10 dígitos y sea válida matemáticamente
  if (!cedula || cedula.length !== 10 || !isValidEcuadorianID(cedula)) {
    return NextResponse.json(
      { error: "Formato de cédula incorrecto o dígito verificador inválido" },
      { status: 400 }
    );
  }

  try {
    // 2. Verificar duplicados en la base de datos
    const [existing]: any = await pool.execute(
      "SELECT id, name, referral_code, created_at FROM users WHERE cedula = ? AND role = 'lead'",
      [cedula]
    );

    if (existing.length > 0) {
      const user = existing[0];
      
      // Obtener el número de personas que ha referido
      const [refCountRows]: any = await pool.execute(
        "SELECT COUNT(*) AS count FROM users WHERE referred_by = ?",
        [user.referral_code]
      );
      const referralsCount = refCountRows[0].count;

      // Calcular el puesto en la competencia
      const positionQuery = `
        SELECT COUNT(*) + 1 AS position
        FROM (
          SELECT 
            referral_code,
            (SELECT COUNT(*) FROM users u2 WHERE u2.referred_by = u.referral_code) AS referrals_count,
            created_at
          FROM users u
          WHERE role = 'lead'
        ) AS ranking
        WHERE ranking.referrals_count > ? 
           OR (ranking.referrals_count = ? AND ranking.created_at < ?)
      `;
      
      const [posRows]: any = await pool.execute(positionQuery, [
        referralsCount,
        referralsCount,
        user.created_at
      ]);
      const position = posRows[0].position;

      // Extraer primer y segundo nombre del nombre completo (formato Apellidos Nombres)
      const nameParts = user.name.trim().split(/\s+/);
      let fName = nameParts[0];
      let sName = "";
      if (nameParts.length >= 4) {
        fName = nameParts[2];
        sName = nameParts[3];
      } else if (nameParts.length === 3) {
        fName = nameParts[1];
        sName = nameParts[2];
      } else if (nameParts.length === 2) {
        fName = nameParts[1];
      }
      const givenNames = sName ? `${fName} ${sName}` : fName;

      return NextResponse.json({
        success: true,
        alreadyRegistered: true,
        name: user.name,
        givenNames,
        referralCode: user.referral_code,
        referralsCount,
        position,
      });
    }

    // 3. Consultar la API externa de SECAP
    const res = await fetch(SECAP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: `documento=${cedula}&tipo=1`,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "No se pudo consultar el servicio de identidad nacional" },
        { status: 502 }
      );
    }

    const data = await res.json();

    if (data.respuesta === 0 || !data.nombre) {
      return NextResponse.json(
        { error: "Cédula no encontrada en el padrón electoral o Registro Civil" },
        { status: 404 }
      );
    }

    // Formatear el nombre en Title Case
    const cleanName = data.nombre.trim();
    const toTitleCase = (str: string) =>
      str
        .toLowerCase()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const secapNombres = data.nombres || "";
    const nameParts = secapNombres.trim().split(/\s+/);
    const fName = nameParts[0] ? toTitleCase(nameParts[0]) : "";
    const sName = nameParts[1] ? toTitleCase(nameParts[1]) : "";
    const givenNames = sName ? `${fName} ${sName}` : fName;

    return NextResponse.json({
      success: true,
      name: toTitleCase(cleanName),
      givenNames,
      birthDate: data.fechaNacimiento || null, // Formato AAAA-MM-DD
    });
  } catch (error) {
    console.error("Error al validar cédula:", error);
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor al validar la identidad" },
      { status: 500 }
    );
  }
}
