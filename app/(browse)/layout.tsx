import { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

const BrowseLayout = async ({children,}: {children: React.ReactNode;}) => {
    const user = await currentUser();

    return (
        <>
            {!!user ? 
                (
                    <>
                        <Navbar />
                        <div className="flex h-full pt-20">
                            <Suspense fallback={<SidebarSkeleton />}>
                                <Sidebar />
                            </Suspense>
                            <Container>
                                {children}
                            </Container>
                        </div>
                    </>
                ): (
                    <Container>
                        {children}
                    </Container>
                )
            }
        </>
    );
};

export default BrowseLayout;  