import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { ReservationTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import nodemailer from 'nodemailer';

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

const deleteReserveSchema = z.object({
    roomId: z.string(),
    date: z.string(),
    span: z.number(),
    email: z.string(),
    roomName: z.string(),
    name: z.string(),
})

type deleteReserveRequest = z.infer<typeof deleteReserveSchema>


export async function DELETE(request: NextRequest){
    const data = await request.json();
    try {
        deleteReserveSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { roomId, date, span, email, roomName, name } = data as deleteReserveRequest;

    try {
        await db.delete(ReservationTable).where(and(eq(ReservationTable.date, date), eq(ReservationTable.roomId, roomId), eq(ReservationTable.span, span))).execute();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'point3.tw@gmail.com',
                pass: 'qzcsdflmvxaexqdx'
            }
        });
        const mailOptions = {
            from: 'point3.tw@gmail.com',
            to: email,
            subject: '0.3練團室預約取消通知！',
            text: `您好${name}！\n您原本在${date},${span+10}:00~${span+11}:00預約${roomName}，已經成功取消。`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "Delete from db" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong deleting reservation" },
            { status: 500 },
        );
    }
}