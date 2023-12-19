import { NextResponse } from "next/server";
import Person from '../../../libraries/models/Person';

export async function GET(request) {
    const names = new Person().getAll();
    return NextResponse.json({ message: names }, { status: 200 });
}