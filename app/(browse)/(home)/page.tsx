// Page and 'Route' are reserved Keywords
// page.tsx / page.jsx are used to create Client Route   -->> like http://localhost:3000/folder where folder is the Client Route
// route.tsx / route.jsx are used to create API Route  -->> {"foo": "bar"} API inside the 'localhost:3000//folder' pager

export default function Page() {
  return (
    <>
      <div className="flex flex-col mt-4 gap-y-8">
        <h1>
          HomePage
        </h1>
      </div>
    </>
  );
}
