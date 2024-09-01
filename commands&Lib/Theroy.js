// __________________________________  Client Routes  _____________________________________________
// Page and 'Route' are reserved Keywords                                                          |
// page.tsx / page.jsx are used to create Client Route                                             |      
//               -->>  like http://localhost:3000/folder where folder is the Client Route          |
// route.tsx / route.jsx are used to create API Route                                              |
//               -->>  {"foo": "bar"} API inside the 'localhost:3000//folder' pager                |
// ________________________________________________________________________________________________|


// ___________________   Routes with auth folder  __________________________________________________________________
//                                                                                                                  |  
// if folders as -->> auth/login/page.tsx                                                                           |
// auth  -->> Needed 'auth' in the routes as localhost:3000/auth/register                                           |
//                                                                                                                  |
// if folders as -->> (auth)/login/page.tsx                                                                         |
// (auth)  -->> Won't needed the routes as localhost:3000/auth/register can directly use localhost:3000/register    |
// _________________________________________________________________                                                |
//                                                                                                                  |
// layout.tsx  -->> Renders the actual content -> {children}                                                        |
// _________________________________________________________________________________________________________________|


// ______________________________________________________________________________________________________________________
// "use client";                                                                                                         | 
//           -->>    // converts Server Component to Client Component                                                    |
// Any component created in app folder are consider 'Server Component' (by default)                                      |
//                                                                                                                       |
// Server Component                                                                                                      |
//   -->  Components that are rendered on the server and sent as static HTML to the client.                              |
//   -->  Suitable for components that don’t need interactivity or rely on browser-specific APIs.                        |
//   -->  Commonly used for static content or content that relies heavily on server-side data fetching.                  |
//                                                                                                                       |
// Client Component                                                                                                      |
//  -->  rendered on the client side, meaning they are shipped with JavaScript and executed in the user's browser.       |
//  -->  Suitable for components that need to manage state, respond to user interactions, or use browser-specific APIs.  |
//  -->  Commonly used for forms, buttons, modals, and other interactive elements.                                       |
// ______________________________________________________________________________________________________________________|