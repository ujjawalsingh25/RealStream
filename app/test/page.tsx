"use client";       // converts Server Component to Client Component
// Any component created in app folder are consider 'Server Component' (by default)

// Server Component
//   -->  Components that are rendered on the server and sent as static HTML to the client.
//   -->  Suitable for components that don’t need interactivity or rely on browser-specific APIs.
//   -->  Commonly used for static content or content that relies heavily on server-side data fetching.
// Client Component
//   -->   rendered on the client side, meaning they are shipped with JavaScript and executed in the user's browser.
//   -->  Suitable for components that need to manage state, respond to user interactions, or use browser-specific APIs.
//   -->  Commonly used for forms, buttons, modals, and other interactive elements.

const TestPage = () => {
    const onClick = () => {
        console.log("Clicked Something in TestPage");
    }

    return(
        <div onClick={onClick}>
            Hello Test Page
        </div>
    );
};

export default TestPage;