import React from "react";

function ExperienceCard({ company, position, startYear, endYear }) {
    return (
        <div className="flex flex-col gap-[0px] justify-center">
            <h5 className="text-lg text-white font-Inter ">{company}</h5>
            <p className="text-lg text-[#FFFFFF70]">
                {position}, {startYear} {endYear && `- ${endYear}`}
            </p>
        </div>
    );
}

export default ExperienceCard;
