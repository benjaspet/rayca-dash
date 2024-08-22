import React from "react";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";

const BrowsersAndDevices: React.FC = () => {

    const browserData = [
        {
            browser: "Brave on Mac OS X",
            location: "Nin Binh, Vietnam",
            session: "Current session",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png"
        },
        {
            browser: "Mia's MacBook Pro",
            location: "Nin Binh, Vietnam",
            session: "Current session",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png"
        },
        {
            browser: "Brave on Mac OS X",
            location: "Mexico City, Mexico",
            session: "Current session",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png"
        },
        {
            browser: "Mia's MacBook Pro",
            location: "Mexico City, Mexico",
            session: "Current session",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png"
        }
    ];


    return (
        <>
            <div className={"my-5 md:mx-4 bg-white dark:bg-mainDash transition-colors duration-500 ease-in-out"}>
                <div className={"mb-5"}>
                    <h3 className={"text-lg font-semibold text-gray-900 dark:text-white"}>
                        Browsers and devices
                    </h3>
                    <p className={"text-sm text-gray-600 font-medium dark:text-gray-400"}>
                        These browsers and devices are currently signed in to your account.
                        Remove any unauthorized devices.
                    </p>
                </div>
                {browserData.map((data, index) => (
                    <ul key={index} className="w-full text-sm font-medium text-gray-900 bg-white border-t
                    border-basicsDivider dark:bg-mainDash dark:border-basicsDivider dark:text-white transition-colors
                    duration-500 ease-in-out">
                        <li className="w-full px-4 py-4 rounded-t-lg">
                            <div className={"flex items-center justify-between"}>
                                <div className={"inline-flex items-center"}>
                                    <img
                                        src={data.icon}
                                        className={"h-5 me-2.5"}
                                        alt={"Browser"}
                                    />
                                    <span className={"text-sm me-3"}>{data.browser}</span>
                                </div>
                                <div className={"flex items-center"}>
                                    <img
                                        className="hidden md:block md:rounded-full md:w-5 md:h-5 md:me-1.5 md:object-cover"
                                        src={data.flag}
                                        alt={"Vietnam"}
                                    />
                                    <span className={"text-sm text-gray-400 me-2 md:me-5 text-center md:block"}>
                                        {data.location}
                                    </span>
                                    <span className={"text-sm text-gray-400 me-2 md:me-5 text-center md:block"}>
                                        {data.session}
                                    </span>
                                    <FaTrash className={"text-gray-400 cursor-pointer"}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export default BrowsersAndDevices;
