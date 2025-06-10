export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";

export async function GET(request) {
    const apiKey = request.headers.get("authorization");
    if (!apiKey) {
        return NextResponse.error(new Error("Missing authorization"));
    }
    else if (apiKey !== process.env.FUSION_API_KEY) {
        return NextResponse.error(new Error("Not authorized"));
    }

    const { rows } = await sql`
        SELECT
            CAST(score AS INTEGER),
            name,
            score FROM fusionimpossible
        ORDER BY score DESC
        LIMIT 10;
    `;

    return Response.json(rows, { status: 200 });
}

export async function POST(request) {
    const apiKey = request.headers.get("authorization");

    if (!apiKey) {
        return NextResponse.error(new Error("Missing authorization"));
    }
    else if (apiKey !== process.env.FUSION_API_KEY) {
        return NextResponse.error(new Error("Not authorized"));
    }

    const body = await request.json();
    const { name, score } = body;

    if (!name || !score) {
        return Response.error(new Error("Missing name or score"));
    }

    const queryResult = await sql`
        INSERT INTO fusionimpossible (name, score)
        VALUES (${name}, ${score});
    `;

    return NextResponse.json({ message: `${queryResult.rows}: Name - ${name} Score - ${parseInt(score)}`}, {status: 200});
}