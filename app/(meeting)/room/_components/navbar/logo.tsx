// Since root file named with '_'underscoreStarting so inside files are taken as Routes even named page.tsx
// ____________________________________________________________________________________________________________

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
    return(
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-slate-700 rounded-full p-2 mr-12 shrink-0 lg:mr-0 lg:shrink">
                <Image 
                    src= "/RealStreamLogo.svg"
                    alt= "RealStream"
                    height= "60"
                    width= "60"
                />
                </div>
                <div>
                    <p className={cn("hidden lg:block text-sm text-muted-foreground", font.className,)}>
                        Stream Your Reality,
                    </p>
                    <p className={cn("hidden lg:block text-xs text-muted-foreground", font.className,)}>
                        Live Your Passion
                    </p>
                </div>
            </div>
        </Link>
    );
};