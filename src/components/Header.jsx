import React from "react";
import { ButtonPrimary, ButtonIconed } from "./Buttons";
import { ExternalLinkIcon } from "../assets/icons/Icons";

function Header({ className }) {
    return (
        <header
            className={`max-w-[1200px] mx-auto mt-[45px] flex items-center gap-2.5 justify-end ${className}`}
        >
            <ButtonPrimary
                text="Get in touch"
                onClickHandler={() => {
                    window.open("mailto:ui.yazir@gmail.com");
                }}
            />
            <ButtonIconed
                text="Resume"
                icon={ExternalLinkIcon}
                onClickHandler={() => {
                    window.open(
                        "https://www.dropbox.com/scl/fi/wjujd7aioqs5epy877s29/resume.pdf?rlkey=z3pmgiu5jv39nlbp0tzo2rcqn&st=a19fjj3o&dl=0",
                        "_blank"
                    );
                }}
            />
        </header>
    );
}

export default Header;
