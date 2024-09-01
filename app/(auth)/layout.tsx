// auth  -->> Needed 'auth' in the routes as localhost:3000/auth/register 
// (auth)  -->> Won't needed the routes as localhost:3000/auth/register can directly use localhost:3000/register

import React from "react";

const AuthLayout = (  { children } : { children: React.ReactNode; }  ) => {
        return(
            <div className="flex flex-col gap-y-4">
                <nav className="p-1 bg-red-400 w-full">
                    Auth Navbar
                </nav>
                {children}
            </div>
        );
}

export default AuthLayout;