import { NextRequest, NextResponse } from "next/server";

import {z} from "zod"

import { db } from "@/db";
import { RoomInfoTable } from "@/db/schema";
import {and, eq} from "drizzle-orm";
import { roomInfoType } from "@/lib/types";

const RoomInfoSchema = z.object({
    roomId: z.string(),
})

type RoomInfoRequest = z.infer<typeof RoomInfoSchema>

export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        RoomInfoSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { roomId } = data as RoomInfoRequest;

    try{

        const [roomInfo] = await db
            .select({
                roomId: RoomInfoTable.roomId,
                roomName: RoomInfoTable.roomName,
                roomContent: RoomInfoTable.content,
            })
            .from(RoomInfoTable)
            .where(eq(RoomInfoTable.roomId, roomId))
            .execute();

        if (roomInfo) {
            return NextResponse.json(
                { roomInfo: roomInfo },
                { status: 200 }
            );
        }

    }catch(error){
        return NextResponse.json(
            { error: "Couldn't get room info"},
            { status: 500 }
        );
    }
}

const updateRoomInfoSchema = z.object({
    roomId: z.string(),
    roomName: z.string(),
    content: z.string().optional(),
});

type updateRequest = z.infer<typeof updateRoomInfoSchema>

export async function PUT(request: NextRequest){
    const data = await request.json();
    try {
        RoomInfoSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const { roomName, content, roomId } = data as updateRequest;

    try {
        const [existingRooms] = await db
            .select({
                
            })
            .from(RoomInfoTable)
            .where(eq(RoomInfoTable.roomId, roomId))
            .execute();

        if (existingRooms) {
            await db.update(RoomInfoTable)
                .set({
                    roomName: roomName,
                    content: content,
                })
                .where(eq(RoomInfoTable.roomId, roomId))
                .execute();

            return NextResponse.json(
                { message: "Room info updated successfully" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: "Room not found" },
                { status: 200 }
            );
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Couldn't update room info" },
            { status: 500 }
        );
    }
}

const deleteRoomInfoSchema = z.object({
    roomName: z.string(),
});

type deleteRoomInfoRequest = z.infer<typeof deleteRoomInfoSchema>

export async function DELETE(request: NextRequest){
    const data = await request.json();
    try {
        deleteRoomInfoSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { roomName } = data as deleteRoomInfoRequest;

    try{
        const existingRooms = await db
            .select({
                roomName: RoomInfoTable.roomName
            })
            .from(RoomInfoTable)
            .where(eq(RoomInfoTable.roomName, roomName))
            .execute();

        if (existingRooms.length > 0) {
            await db
                .delete(RoomInfoTable)
                .where(eq(RoomInfoTable.roomName, roomName))
                .execute();

            return NextResponse.json(
                { message: "Room info deleted successfully" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "Room not found" },
                { status: 404 }
            );
        }
    }catch(error){
        return NextResponse.json(
            { error: 'Something went wrong deleting the info'},
            { status: 500 },
        );
    }
}