export const dynamic = 'force-dynamic'

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

    const rows = await sql.query('SELECT CAST(score AS INTEGER), name, score FROM fusionimpossible ORDER BY score DESC LIMIT $1', [10]);

    return NextResponse.json(rows, { status: 200 });
}

export async function POST(request) {
    const sql = neon(`${process.env.POSTGRES_URL}`);
    const apiKey = request.headers.get("authorization");

    if (!apiKey) {
        return NextResponse.json({ error: "Missing authorization" }, { status: 401 });
    }
    else if (apiKey !== process.env.FUSION_API_KEY) {
        return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const body = await request.json();
    const { name, score } = body;

    if (!name || !score) {
        return NextResponse.json({ error: "Missing name or score" }, { status: 400 });
    }

    const queryResult = await sql.query(`
        INSERT INTO fusionimpossible (name, score)
        VALUES ($1, $2);
    `, [name, score]);

    return NextResponse.json({ message: `Name - ${name} Score - ${parseInt(score)}` }, { status: 200 });
}