import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request) {
    const apiKey = request.headers.get("authorization");

    if (!apiKey) {
        return NextResponse.error(new Error("Missing authorization"));
    }
    else if (apiKey !== process.env.FUSION_API_KEY) {
        return NextResponse.error(new Error("Not authorized"));
    }

    const name = request.nextUrl.searchParams.get("name");
    const score = request.nextUrl.searchParams.get("score");

    if (!name || !score) {
        return NextResponse.error(new Error("Missing name or score"));
    }

    const { rows } = await sql`
        WITH RankedScores AS (
            SELECT
                RANK() OVER (ORDER BY score DESC) as position,
                name,
                score
            FROM fusionimpossible
        )
        SELECT *
        FROM RankedScores
        WHERE position IN (
            (SELECT position - 1 FROM RankedScores WHERE score = ${score} AND name = ${name} LIMIT 1),
            (SELECT position FROM RankedScores WHERE score = ${score} AND name = ${name} LIMIT 1),
            (SELECT position + 1 FROM RankedScores WHERE score = ${score} AND name = ${name} LIMIT 1)
        )
    `;

    return NextResponse.json(rows, { status: 200 });
}

