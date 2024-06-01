import { NextResponse } from "next/server";

import {z} from "zod"

import { db } from "@/db";
import { RoomInfoTable } from "@/db/schema";
import {and, eq} from "drizzle-orm";

const RoomInfoSchema = z.object({
    roomName: z.string(),
    content: z.string(),
})

type RoomInfoRequest = z.infer<typeof RoomInfoSchema>

export async function POST(request: NextResponse){
    const data = await request.json();
    try {
        RoomInfoSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const {roomName, content} = data as RoomInfoRequest;

    try{

        const existingRoom = await db
            .select({
                roomName: RoomInfoTable.roomName
            })
            .from(RoomInfoTable)
            .where(eq(RoomInfoTable.roomName, roomName))
            .execute();

        if(existingRoom.length > 0){
            await db
                .update(RoomInfoTable)
                .set({
                    content: content,
                    // roomImage: roomImage
                })
                .where(eq(RoomInfoTable.roomName, roomName))
                .execute();
        }else{
            await db
                .insert(RoomInfoTable)
                .values({
                    roomName,
                    content
                })
                .execute();
            return NextResponse.json(
                {message: "Post room info successfully"},
                // status???
            );
        }
    }catch(error){
        return NextResponse.json(
            { error: "Couldn't insert room info"},
            { status: 500 }
        );
    }
}

const updateRoomInfoSchema = z.object({
    roomName: z.string(),
    content: z.string().optional(),
    roomImage: z.string().optional(),
});

type updateRequest = z.infer<typeof updateRoomInfoSchema>

export async function PUT(request: NextResponse){
    const data = await request.json();
    try {
        RoomInfoSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const {roomName, content, roomImage} = data as updateRequest;

    const updateData: { [key: string]: string | undefined } = {};
    if (content !== undefined) updateData.content = content;
    if (roomImage !== undefined) updateData.roomImage = roomImage;

    if (Object.keys(updateData).length === 0) {
        return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    try {
        const existingRooms = await db
            .select({
                roomName: RoomInfoTable.roomName
            })
            .from(RoomInfoTable)
            .where(eq(RoomInfoTable.roomName, roomName))
            .execute();

        if (existingRooms.length > 0) {
            await db
                .update(RoomInfoTable)
                .set(updateData)
                .where(eq(RoomInfoTable.roomName, roomName))
                .execute();

            return NextResponse.json(
                { message: "Room info updated successfully" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "Room not found" },
                { status: 404 }
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

export async function DELETE(request: NextResponse){
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