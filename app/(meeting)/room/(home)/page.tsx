"use client";

import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RoomPage = () => {
    const router = useRouter();
    const [meetingId, setMeetingId] = useState<string>(""); 

    const handleJoinRoom = useCallback(() => {
        router.push(`/room/${meetingId}`)
    }, [router, meetingId]);

    return (
        <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
            <Card className="h-1/2 w-1/3 max-w-96 mx-auto p-16 space-y-6 bg-[#171818]">
                <Link href={`/room/${uuid()}`}>
                    <Button>Create new Room</Button>
                </Link>
                <p className="text-gray-400">OR</p>
                <div className="flex space-x-4">
                    <Input 
                        value={meetingId}
                        onChange={(e) => setMeetingId(e.target.value)}
                        name="RoomCode"
                        placeholder="Enter Room Code" 
                    />
                    <Button onClick={handleJoinRoom}>Join</Button>
                </div>
            </Card>
        </div>
    );
};

export default RoomPage;