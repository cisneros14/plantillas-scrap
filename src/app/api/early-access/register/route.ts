import { NextRequest, NextResponse } from "next/server";
import { isValidEcuadorianID } from "@/lib/validation";
import pool from "@/lib/db";

function generateFriendlySlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quitar acentos
    .replace(/[^a-z0-9\s-]/g, "") // Quitar caracteres raros
    .replace(/[\s_]+/g, "-") // Espacios a guiones
    .replace(/-+/g, "-") // Evitar dobles guiones
    .replace(/^-+|-+$/g, ""); // Quitar guiones al inicio/final
}

async function getUniqueReferralCode(name: string): Promise<string> {
  const base = generateFriendlySlug(name) || "usuario";
  let candidate = base;
  let counter = 2;
  while (true) {
    const [rows]: any = await pool.execute(
      "SELECT id FROM users WHERE referral_code = ?",
      [candidate]
    );
    if (rows.length === 0) break;
    candidate = `${base}-${counter}`;
    counter++;
  }
  return candidate;
}

export async function POST(req: NextRequest) {
  try {
    const { name, birthDate, cedula, email, phone, referredBy } = await req.json();

    // 1. Validar que todos los campos requeridos estén presentes
    if (!name || !cedula || !email || !phone) {
      return NextResponse.json(
        { error: "Todos los campos (nombre, cédula, correo, teléfono) son requeridos" },
        { status: 400 }
      );
    }

    // 2. Validar formato de la cédula
    if (cedula.length !== 10 || !isValidEcuadorianID(cedula)) {
      return NextResponse.json(
        { error: "La cédula proporcionada no es válida" },
        { status: 400 }
      );
    }

    // 3. Validar formato básico de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico no tiene un formato válido" },
        { status: 400 }
      );
    }

    // 4. Verificar duplicados por cédula y por correo
    const [dupCedula]: any = await pool.execute(
      "SELECT id FROM users WHERE cedula = ?",
      [cedula]
    );
    if (dupCedula.length > 0) {
      return NextResponse.json(
        { error: "Esta cédula ya se encuentra registrada" },
        { status: 400 }
      );
    }

    const [dupEmail]: any = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );
    if (dupEmail.length > 0) {
      return NextResponse.json(
        { error: "Este correo electrónico ya se encuentra registrado" },
        { status: 400 }
      );
    }

    // 5. Validar que el código de referido del invitador sea válido (si se proporciona)
    let validReferredBy = null;
    if (referredBy) {
      const [referrer]: any = await pool.execute(
        "SELECT referral_code FROM users WHERE referral_code = ? AND role = 'lead'",
        [referredBy]
      );
      if (referrer.length > 0) {
        validReferredBy = referrer[0].referral_code;
      }
    }

    // 6. Generar código de referido único para el nuevo usuario
    const referralCode = await getUniqueReferralCode(name);

    // 7. Insertar el nuevo lead en la base de datos
    const formattedBirthDate = birthDate ? birthDate : null;

    const query = `
      INSERT INTO users (name, birth_date, cedula, email, phone, role, referral_code, referred_by)
      VALUES (?, ?, ?, ?, ?, 'lead', ?, ?)
    `;
    await pool.execute(query, [
      name,
      formattedBirthDate,
      cedula,
      email,
      phone,
      referralCode,
      validReferredBy
    ]);

    // 8. Calcular la posición inicial del nuevo usuario en el ranking
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
      WHERE ranking.referrals_count > 0 
    `;
    const [posRows]: any = await pool.execute(positionQuery);
    const position = posRows[0].position;

    return NextResponse.json({
      success: true,
      message: "Te has registrado correctamente al Programa de Recompensas de Biopepht.",
      referralCode,
      position,
      referralsCount: 0,
    });
  } catch (error) {
    console.error("Error al registrar lead:", error);
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor al procesar tu registro" },
      { status: 500 }
    );
  }
}
