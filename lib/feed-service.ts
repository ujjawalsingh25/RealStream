import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getStreams = async () => {
    let userId;

    try {
        const self = await getSelf();
        userId = self.id;
    } catch {
        userId = null;
    }

    let streams = [];

    if(userId) {
        // Load by user id
        streams = await db.stream.findMany({
            where: {
                user: {
                    NOT: {
                        blocking: {
                            some: {
                                blockedId: userId,
                            }
                        }
                    }
                }
            },
            select: {
                id: true,
                user: true,
                name: true,
                isLive: true,
                thumbnailUrl : true
            },
            orderBy: [
                {
                    isLive: "desc"
                },
                {
                    updatedAt: "desc",
                },
            ],
        })
    } else {
        streams = await db.stream.findMany({
            select: {
                id: true,
                user: true,
                name: true,
                isLive: true,
                thumbnailUrl : true
            },
            orderBy: [
                {
                    isLive: "desc"
                },
                {
                    updatedAt: "desc",
                },
            ]
        })
    }

    return streams;
}