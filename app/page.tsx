// Page and 'Route' are reserved Keywords
// page.tsx / page.jsx are used to create Client Route   -->> like http://localhost:3000/folder where folder is the Client Route
// route.tsx / route.jsx are used to create API Route  -->> {"foo": "bar"} API inside the 'localhost:3000//folder' pager

import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <h1>Dashboard</h1>
        {/* <UserButton 
          afterSignOutUrl="/"
        /> */}
      </div>
    </>
  );
}
