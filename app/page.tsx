// Page and 'Route' are reserved Keywords
// page.tsx / page.jsx are used to create Client Route   -->> like http://localhost:3000/folder where folder is the Client Route
// route.tsx / route.jsx are used to create API Route  -->> {"foo": "bar"} API inside the 'localhost:3000//folder' pager

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-red-500 font-bold mb-4">
        Real-Stream
      </p>
      <Button size="lg" variant='outline'>
        CLick Me
      </Button>
    </>
  );
}
