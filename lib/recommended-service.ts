import { db } from "@/lib/db";
import { getSelf  } from "./auth-service";

export const getRecommended = async () => {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    let userId;
    try {
        const self = await getSelf();
        userId = self.id;
    } catch (error) {
        userId = null;      // Error again handles in ./auth-service for null so no log.
    }
    
    let users = [];
    if(userId){
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                      NOT: {
                        id: userId,
                      },
                    },
                    {
                      NOT: {
                        followedBy: {
                          some: {
                            followerId: userId,
                          },
                        },
                      },
                    },
                ],
            },
            orderBy: {
                createdAt: "desc",
            },
        })
    } else {
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    return users;
};