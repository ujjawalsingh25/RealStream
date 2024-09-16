import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

import { SiGooglemeet } from "react-icons/si";
import { RiRobot3Fill } from "react-icons/ri";

export const Meet = async () => {
    const user = await currentUser();

    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild    
                    >
                        {/* <Link href={`/room/${user.username}`}> */}
                        <Link href={`/room/`}>
                            <SiGooglemeet className="h-7 w-7 lg:mr-2" />
                            <span className="hidden lg:block">
                                Meet-Now
                            </span>
                        </Link>
                    </Button>

                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild    
                    >
                        <Link href={`/mister/`}>
                            <RiRobot3Fill className="h-7 w-7 lg:mr-2" />
                            <span className="hidden lg:block">
                                Mister
                            </span>
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
};