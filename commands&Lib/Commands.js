// To Read
// Server Component & Client Component

// ____________   NEXT JS  ______________________
//                                               |    
// Next JS      -->> To create project           |
    // npx create-next-app@latest file-name      |    
// ______________________________________________|


// ______________    shadcn   __________________________________________
//                                                                      |
    // npx shadcn@latest init        -->> Run the CLI                   |
    // npm install next-themes       -->> themes for Dark Mode          |
//      -------   Add Components using shadcn  --------------           | 
    // npx shadcn@latest add [component]    -->> Components             |
    // npx shadcn@latest add input         -->> UI                      |
    // npx shadcn@latest add tooltip       -->> Hints adding            |
    // npx shadcn@latest add avatar        -->> Avatar                  |
    // npx shadcn@latest add skeleton      -->> Skeleton/LayoutModel    |
//    ------------------------------------------------------------------|
    // npm install next-themes       -->> themes for Dark Mode          |
// _____________________________________________________________________|


// _______________________________   Clerk NextJS   ______________________________________________________________
//                                                                                                                |  
// Clerk NextJS  -->>  For Authentication Dashboard                                                               |
    //  npm install @clerk/nextjs                                                                                 |
    // npm i @clerk/themes    -->> Clerk themes for Dark Mode (Make Appreance -> Dark in ClerkContextProvider)    |
// _______________________________________________________________________________________________________________|


// _______________________________   PRISMA   ______________________________________________________________
//                                                                                                          |
//       PRISMA   -->>  For Database Connection                                                             |
// npm i -D prisma                                                                                          |
// npm i @prisma/client                                                                                     |
// npx prisma init                                                                                          |
// npx prisma db pull       // X //    -->> If DB and tables are created in MySQL serverWorkbench.          |
//                                  -->> It turn your database schema into a Prisma schema                  |
//          ----   To push new schema  ------                                                               |
// npx prisma generate                                                                                      |
// npx prisma db push                                                                                       |
// npx prisma studio          -->> *** To host DB to the WebServer                                          |
// _________________________________________________________________________________________________________|


// ____________________________________________________________________________________________
// _________________    Command in Command Prompt to KILL BUSY PORTS   _____________________|_|
//                                                                                          | |
// C:\Users\Ujjawal Singh>netstat -ano | findstr :3000                                      | |
//   TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       16704             | |
//   TCP    [::]:3000              [::]:0                 LISTENING       16704             | |
//                                                                                          | |
// C:\Users\Ujjawal Singh>taskkill /PID 16704 /F                                            | |
// _________________________________________________________________________________________| |
// _________________________________________________________________________________________|_|

// _____________________   NGROK   ___________________________________________
// ngrok  -->> Ngrok is a tool that creates secure tunnels to localhost,      |
//                     allowing you to expose local servers to the internet.  |
//                                                                            |
    // ngrok http --domain=promoted-fish-working.ngrok-free.app 3000          |
// ___________________________________________________________________________|


// ___________________________________________________________________________________
// SVIX  -->> Provide a package for verifying the webhook signature,                  |
//          -->> making it easy to verify the Authencity of the weebhook events       |
//      npm install svix                                                              |
//                                                                                    |
// ___________________________________________________________________________________|

// npm i query-string

// npm i zustand

// npm i usehooks-ts

// npm i sonner