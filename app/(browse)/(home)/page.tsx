// Page and 'Route' are reserved Keywords
// page.tsx / page.jsx are used to create Client Route   -->> like http://localhost:3000/folder where folder is the Client Route
// route.tsx / route.jsx are used to create API Route  -->> {"foo": "bar"} API inside the 'localhost:3000//folder' pager

import { Suspense } from "react";
import { Results, ResultsSkeleton } from "./_components/results";

export default function Page() {
  return (
    <>
      <div className="h-full p-8 max-w-screen-2xl mx-auto">
        <Suspense fallback={<ResultsSkeleton />}>
          <Results />
        </Suspense>
      </div>
    </>
  );
}
