import RoomPage from "./(home)/page";
import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

interface RoomLayoutProps {
    children: React.ReactNode;
};


const RoomLayout = ({children,}: RoomLayoutProps) => {
    return (
        <>  
            <Navbar />
            <div className="flex flex-col h-full mt-3 pt-20">
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
};

export default RoomLayout;