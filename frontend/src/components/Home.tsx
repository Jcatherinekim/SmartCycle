import React from "react";
// import backgroundImage from ".public/Eventure.png";  // Adjust relative path if needed

export const Home: React.FC = () => {
    return (
        <section
            className="relative mt-6 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(/Eventure.png)`, backgroundSize: 'cover', // Ensure the image covers the whole screen
                    backgroundPosition: 'center' }}
        >
            <button
                className="overflow-hidden gap-2 self-stretch p-3 my-auto text-base leading-none bg-green-300 rounded-lg border border-solid border-zinc-300 text-neutral-100"
            >
                Sign in with Google
            </button>
        </section>
    );
};
