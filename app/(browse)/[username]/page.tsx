// "[]"  -->>  Square brackets of folder name indicates the Routes that this is dynamic Part of url 
//                  which is not hardcoded so inside the page.tsx of this folder we can access the url
//                  (say) inside name of bracket is access to url name -->> [username] -> [url]

import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";
import { isFollowingUser } from "@/lib/follow-service";
import { StreamPLayer } from "@/components/stream-player";

interface UserPageProps {
    params: {
        username: string;       // name can be anything as we taken [username] in folder so username because 
    };
};

const UserPage = async ({params}: UserPageProps) => {
    // throw new Error("Test");
    const user = await getUserByUsername(params.username);

    if(!user || !user.stream) {
        notFound();
    }
    const isFollowing = await isFollowingUser(user.id);
    const isBlocked = await isBlockedByUser(user.id);
    if(isBlocked) {          // so that blocked user can't see the page of UserWhoBlocked
        notFound();
    }

    return (
        <StreamPLayer 
            user={user}
            stream={user.stream}
            isFollowing={isFollowing}
        />
    );
};

export default UserPage;