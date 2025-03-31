import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer max-w-6xl mx-auto text-neutral-content items-center p-6">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   Privacy Policy
                </nav>
            </footer>
        </div>
    );
};

export default Footer;