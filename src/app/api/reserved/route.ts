import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { ReservationTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

const reserveSchema = z.object({
    roomId: z.string(),
    date: z.string(),
})

type reserveRequest = z.infer<typeof reserveSchema>


export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        reserveSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { roomId, date} = data as reserveRequest;
    // var availableRoom = [0,0,1,1,1,1,1,1,1,1,1,1]

    try {
        const temp = await db
            .select({
                span: ReservationTable.span,
                date: ReservationTable.date,
                displayName: ReservationTable.displayName,
                email: ReservationTable.email,
                phone: ReservationTable.phone,
                roomId: ReservationTable.roomId,
            })
            .from(ReservationTable)
            .where(and(eq(ReservationTable.date, date), eq(ReservationTable.roomId, roomId)))
            .execute()
        return NextResponse.json(
            { reservedRooms: temp},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong getting reserved rooms" },
            { status: 500 },
        );
    }
}