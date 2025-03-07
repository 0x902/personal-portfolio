import React from "react";

function ButtonPrimary({ text, onClickHandler, className }) {
    return (
        <button
            onClick={onClickHandler}
            className={`${className} cursor-pointer font-Inter text-lg text-white bg-[#5286E4] px-[15px] py-[12px] rounded-full`}
        >
            <span>{text}</span>
        </button>
    );
}

function ButtonSecondary({ text, onClickHandler, className }) {
    return (
        <button
            onClick={onClickHandler}
            className={`${className} cursor-pointer font-Inter text-lg text-[#333333] border-1 border-[#ECECEC] px-[15px] py-[12px] rounded-full`}
        >
            <span>{text}</span>
        </button>
    );
}

function ButtonIconed({ text, icon, onClickHandler, className }) {
    return (
        <button
            onClick={onClickHandler}
            className={`${className} flex items-center gap-2.5 cursor-pointer font-Inter text-lg text-[#333333] border-1 border-[#ECECEC] px-[15px] py-[12px] rounded-full`}
        >
            <span>{text}</span>
            <img src={icon} alt={text + " icon"} />
        </button>
    );
}

export { ButtonPrimary, ButtonSecondary, ButtonIconed };
