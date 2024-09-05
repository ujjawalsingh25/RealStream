import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const getSelf = async () => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {externalUserId: self.id},
    });
    if(!user) {
        throw new Error("Not Found User");
    }
    return user;
};


export const getSelfByUsername = async (username: string) => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized");
    }
    
    const user = await db.user.findUnique({
        where: {username},
    });
    if(!user) {
        throw new Error("Not Found User");
    }
    if(self.username !== user.username) {
        throw new Error("Unauthorized");
    }

    return user;
};
// _____________________________________________________________________________________________________
// we using another functions for selfUser Dashboard and not routing to                                 |
// dyanmic username dashboard with self username whose function is already present                      |
//                                                                                                      |
// [1] Security                                                                                         |
// -->> The getSelfByUsername function makes sure that only the logged-in user can access their         |
//      own dashboard. This prevents anyone from viewing or messing with someone else's dashboard.      |
//                                                                                                      |
// [2]  Flexibility for the Future:                                                                     |
// -->> For instance, if you later add roles like moderators who need to                                |
//     manage streams and // settings for multiple users, this URL structure will support that.         |
//     Moderators could then access various user dashboards depending on their permissions,             |
//      which helps the platform grow and add more complex features over time.                          |
// _____________________________________________________________________________________________________|