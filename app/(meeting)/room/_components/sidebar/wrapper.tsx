"use client";

import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

interface WrapperProps {
    children: React.ReactNode;
};

export const Wrapper = ( {children,} : WrapperProps) => {
    const { collapsed } = useSidebar((state) => state);
    
    // _____________________________________________________________________________
    const isClient = useIsClient();                                              // |
    // work same as the above useState and useEffect                                |
    //      -->>  to check if clientSideRendering or ServerSide Rendering           |
    //                                                                              |
    // const [isClient, setIsClient] = useState(false);                             |
    // useEffect(() => {                                                            |
    //     setIsClient(true);                                                       |   
    // }, []);                                                                      |
    // _____________________________________________________________________________|

    if(!isClient) { 
            return (
                <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full 
                bg-background border-r border-[#2D2E35] z-50">
                    <ToggleSkeleton />              {/*Since in below collapse is client-side Rendering*/}
                    <FollowingSkeleton />        {/* So added all three Skeletons(Layout while Reloading) */}
                    <RecommendedSkeleton />          {/*only for ServerSide Rendering */}
                </aside>
        );
    }

    return (
        <aside 
            className={cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    );
};