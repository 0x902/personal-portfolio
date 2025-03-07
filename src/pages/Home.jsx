import React from "react";
import Header from "../components/Header";
import {
    UxIxDImage,
    DesignToolsImage,
    MeGif,
    DevelopToolsImage,
} from "../assets/images/Images";
import { LinkedInIcon, GitHubIcon } from "../assets/icons/Icons";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

function Home() {
    return (
        <div className="flex flex-col h-[100vh]">
            <Header className="px-[16px] lg:px-0 w-full" />
            <main className="px-[16px] lg:flex-1 w-full text-[#333333]   max-w-[1200px] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 pt-[37vh] pb-[20px] lg:py-0  items-center gap-[20px]">
                <div className="flex flex-1 flex-col gap-[15px]">
                    <h1 className="text-3xl font-semibold ">
                        I'm{" "}
                        <Typewriter
                            loop={true}
                            cursor={true}
                            cursorStyle="|"
                            cursorColor="#33333350"
                            words={[
                                "Yasir Ahamed.",
                                "a uxui designer.",
                                "a frontend developer.",
                            ]}
                        />
                    </h1>
                    <p className="text-[#333333] text-xl max-w-[560px]">
                        Creating user-friendly, business-focused solutions that
                        turn challenges into streamlined experiences. A curious
                        human thinking by heart and designing by brain.
                    </p>
                </div>
                <DotLottieReact
                    className="flex-1 hidden lg:block "
                    src="https://lottie.host/e1df3a0b-5d0d-484d-8830-80e4ad048f8b/52BfflD7k9.lottie"
                    loop
                    autoplay
                />
            </main>
            <div className="bg-[#5285e43c] border-t-1 border-[#5285e4] text-white">
                <Marquee className="cursor-default">
                    <div className="flex items-center">
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                        <p className="text-[#5285e4] mr-[5px] text-lg font-light">
                            ✹ Create Design From Human for Human{" "}
                        </p>
                    </div>
                </Marquee>
            </div>
            <div className="bg-[#333333] w-full px-[16px] flex-1">
                <div className="max-w-[1200px] py-[50px] mx-auto w-full h-full grid lg:grid-cols-2 sm:grid-cols-1 gap-[50px]">
                    <section className="flex flex-col lg:gap-2.5 sm:gap-0">
                        <div>
                            <h2 className="text-white text-xl">
                                A UXUI designer doing;{" "}
                                <span className="text-[#5286E4]">
                                    define → design → deliver{" "}
                                </span>
                            </h2>
                            <p className="text-[#FFFFFF70] text-lg">
                                Currently @{" "}
                                <a
                                    className="underline underline-offset-4"
                                    href="https://mnsrobotics.com"
                                    target="blank"
                                >
                                    mnsrobotics
                                </a>
                            </p>
                        </div>
                        <div className="mt-[35px] flex items-center gap-[15px]">
                            <a
                                target="blank"
                                href="https://www.linkedin.com/in/uiyasir/"
                            >
                                <img
                                    className="h-[24px]"
                                    src={LinkedInIcon}
                                    alt="linkedin icon"
                                />
                            </a>
                            <a target="blank" href="https://github.com/0x902">
                                <img
                                    className="h-[24px]"
                                    src={GitHubIcon}
                                    alt="Github icon"
                                />
                            </a>
                            <p className="text-sm/tight  text-[#FFFFFF70]">
                                I’m not on social media.
                                <br />
                                Curious why?{" "}
                                <a
                                    className="underline underline-offset-3"
                                    href="mailto:ui.yazir@gmail.com"
                                >
                                    Let’s chat!
                                </a>
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col gap-[20px]">
                        <div className="flex items-center gap-2.5">
                            <h4 className="text-white  text-xl font-medium">
                                Experience
                            </h4>
                            <div className="flex-1 h-0.5 bg-[#FFFFFF20]"></div>
                        </div>
                        <ExperienceCard
                            company="MNS Robotics"
                            position="UIUX Designer"
                            startYear="2024"
                        />
                        <ExperienceCard
                            company="University of Colombo School of Computing"
                            position="Bachelor of Information Technology"
                            startYear="2023"
                        />
                        <ExperienceCard
                            company="Baycop Technologies"
                            position="Web design and development"
                            startYear="2021"
                            endYear="2023"
                        />
                        <ExperienceCard
                            company="Freelancer.com"
                            position="Design Freelancer"
                            startYear="2020"
                        />
                    </section>
                </div>
            </div>
            <Footer className="px-[16px]" />
        </div>
    );
}

export default Home;
