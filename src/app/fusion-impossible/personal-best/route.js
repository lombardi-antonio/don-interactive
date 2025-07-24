import { NextResponse } from "next/server";
import { neon } from '@neondatabase/serverless';

export async function GET(request) {
    const sql = neon(`${process.env.POSTGRES_URL}`);
    const apiKey = request.headers.get("authorization");

    if (!apiKey) {
        return NextResponse.json({ error: "Missing authorization" }, { status: 401 });
    }
    else if (apiKey !== process.env.FUSION_API_KEY) {
        return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const name = request.nextUrl.searchParams.get("name");
    const score = request.nextUrl.searchParams.get("score");

    if (!name || !score) {
        return NextResponse.json({ error: "Missing name or score" }, { status: 400 });
    }

    const rows = await sql.query(`
        WITH RankedScores AS (
            SELECT
                RANK() OVER (ORDER BY score DESC) as position,
                name,
                score
            FROM fusionimpossible
        )
        SELECT * FROM RankedScores
        WHERE position IN (
            (SELECT position - $1 FROM RankedScores WHERE score = $2 AND name = $3 LIMIT $4),
            (SELECT position FROM RankedScores WHERE score = $5 AND name = $6 LIMIT $7),
            (SELECT position + $8 FROM RankedScores WHERE score = $9 AND name = $10 LIMIT $11)
        )
    `, [1, score, name, 5, score, name, 5, 1, score, name, 5]);

    const query = `
    WITH RankedScores AS (
        SELECT RANK() OVER (ORDER BY score DESC) 
        AS position, name, score FROM fusionimpossible
    )
    SELECT * FROM RankedScores
    WHERE position IN (
        (SELECT position - $1 FROM RankedScores WHERE score = $2 AND name = $3 LIMIT $4),
        (SELECT position FROM RankedScores WHERE score = $5 AND name = $6 LIMIT $7),
        (SELECT position + $8 FROM RankedScores WHERE score = $9 AND name = $10 LIMIT $11)
    )`;
    console.log("Personal best fetched:", rows);

    return NextResponse.json(rows, { status: 200 });
}

