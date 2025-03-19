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
                        "https://www.dropbox.com/scl/fi/rruicooszzno91x2daov4/Resume-Yasir-Ahamad.pdf?rlkey=owrk4ous1bvmyv1v5aueoivzu&st=62f824zc&dl=0",
                        "_blank"
                    );
                }}
            />
        </header>
    );
}

export default Header;
