"use client"

export default async function getHighScores() {
    const queryResult = await sql`
        SELECT
            name,
            CAST(score AS INTEGER)
            FROM fusionimpossible
        ORDER BY score DESC
        LIMIT 10;
    `;

    const highScores = queryResult.rows;

    return highScores;
}