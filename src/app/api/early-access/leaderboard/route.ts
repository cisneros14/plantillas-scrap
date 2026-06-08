import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    // Query para obtener los 10 leads con más referidos
    const query = `
      SELECT 
        u.name,
        u.referral_code,
        u.created_at,
        (SELECT COUNT(*) FROM users u2 WHERE u2.referred_by = u.referral_code) AS referrals_count
      FROM users u
      WHERE u.role = 'lead'
      ORDER BY referrals_count DESC, u.created_at ASC
      LIMIT 10
    `;

    const [rows]: any = await pool.execute(query);

    const leaderboard = rows.map((row: any, index: number) => {
      // Ofuscar el nombre para privacidad (ej. "Carlos Cisneros" -> "Carlos C.")
      const parts = row.name.trim().split(/\s+/);
      const firstName = parts[0] || "";
      const lastInitial = parts[1] ? ` ${parts[1].charAt(0).toUpperCase()}.` : "";
      const displayName = `${firstName}${lastInitial}`;

      return {
        position: index + 1,
        name: displayName || "Anónimo",
        referrals: row.referrals_count || 0,
      };
    });

    return NextResponse.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.error("Error al obtener leaderboard:", error);
    return NextResponse.json(
      { error: "Error al obtener la lista de líderes" },
      { status: 500 }
    );
  }
}
export const dynamic = "force-dynamic";
