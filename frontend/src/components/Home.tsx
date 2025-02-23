import React from "react";

export const Home: React.FC = () => {
    return (
        <section
            className="relative mt-6  bg-cover bg-center"
            style={{ backgroundImage: `url(/Eventure.png)`, backgroundSize: 'cover', // Ensure the image covers the whole screen
                backgroundPosition: 'center center',
                width: '100vw',
                height: '100vh' }}
        >
            <div className="flex items-center justify-center h-full">
            </div>

        </section>
    );
};

