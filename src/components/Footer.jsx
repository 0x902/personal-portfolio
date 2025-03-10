import React from "react";

function Footer({ className }) {
    return (
        <footer className={`w-full py-[12px] bg-[#171717] ${className}`}>
            <p className="max-w-[1200px] text-center lg:text-left mx-auto text-md text-[#FFFFFF70] font-light">
                Made with a jug of ☕ and a loud ceiling fan.
            </p>
        </footer>
    );
}

export default Footer;
