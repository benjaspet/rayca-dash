"use client";
import { FaGear, FaHouse } from "react-icons/fa6";
import { RiFolder6Fill, RiFolderLockFill, RiUserSharedFill, RiNotificationBadgeFill } from "react-icons/ri";
import {FaExternalLinkAlt, FaTrash} from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import DarkModeToggle from "@/components/DarkModeToggle";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import React, {useEffect, useRef, useState} from "react";
import { MdFolder } from "react-icons/md";
import SettingsPage from "@/pages/settings/SettingsPage";
import Image from "next/image";

export default function RaycaSidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    const sidebarIconStyles = "text-gray-500 dark:text-gray-400 transition-colors duration-500 ease-in-out";

    const sidebarItems = [
        { name: "Home", icon: <FaHouse size={18} className={sidebarIconStyles}/> },
        { name: "All files", icon: <RiFolder6Fill size={18} className={sidebarIconStyles}/> },
        { name: "Private files", icon: <RiFolderLockFill size={18} className={sidebarIconStyles}/> },
        { name: "Shared with me", icon: <RiUserSharedFill size={18} className={sidebarIconStyles}/> },
        { name: "Deleted files", icon: <FaTrash size={18} className={sidebarIconStyles}/> },
        { name: "Design", icon: <SiVorondesign size={18} className={sidebarIconStyles}/> },
        { name: "Notifications", icon: <RiNotificationBadgeFill size={18} className={sidebarIconStyles}/> },
        { name: "Settings", icon: <FaGear size={18} className={sidebarIconStyles}/> },
    ];

    const folders = [
        { name: "Folder #1" },
        { name: "Folder #2" },
        { name: "Folder #3" },
    ];

    return (
        <>
            <button
                type="button"
                onClick={toggleSidebar}
                className="bg-white dark:bg-mainDash inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500
                rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="hidden sr-only bg-mainDash">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                ref={sidebarRef}
                id="rayca-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-500 
                ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div
                    className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-sidebar transition-colors
                    duration-500 ease-in-out">
                    <a href="https://raycabio.com/" className="flex items-center mb-3">
                        <img src={"https://cdn-icons-png.flaticon.com/512/14034/14034481.png"}
                               alt={"Rayca Logo"}
                               className={"h-4 me-3 sm:h-6"}
                        />
                        <span
                            className="self-center text-lg font-semibold whitespace-nowrap text-black dark:text-white">
                            Untitled UI
                        </span>
                        <span className="text-sm font-light dark:text-gray-400 ps-14">v4.0</span>
                        <FaExternalLinkAlt
                            size={12}
                            className="text-gray-500 dark:text-gray-400 transition-colors duration-500 ease-in-out ms-1"
                        />
                    </a>

                    {sidebarItems.map((item, index) => (
                        <ul className={"space-y-2 font-medium"} key={index}>
                            <li>
                                <a href="#"
                                    className="flex items-center p-1 lg:p-2 text-gray-900 rounded-lg dark:text-white
                                    hover:bg-gray-100 dark:hover:bg-sidebarActive group transition-colors duration-500
                                    ease-in-out"
                                >
                                    {item.icon}
                                    <span className="ms-3">{item.name}</span>
                                </a>
                            </li>
                        </ul>
                    ))}
                    <DarkModeToggle/>

                    <p className="ps-1 ms-1 pt-2 mt-2 pb-0.5 mb-0.5 text-gray-400 text-xs uppercase">File Browser</p>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="transform duration-500 ease-out flex items-center p-1 lg:p-2 w-full text-base
                                font-normal text-gray-900 rounded-lg transition group hover:bg-gray-100
                                dark:hover:bg-sidebarActive dark:text-white"
                                aria-controls="dropdown-pages"
                                data-collapse-toggle="dropdown-pages"
                            >
                                {isOpen ? (
                                    <IoIosArrowDown
                                        size={18}
                                        className="text-gray-500 dark:text-gray-400"
                                    />
                                ) : (
                                    <IoIosArrowForward
                                        size={18}
                                        className="text-gray-500 dark:text-gray-400"
                                    />
                                )}
                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium">
                Folders
            </span>
                            </button>
                            <ul
                                id="dropdown-pages"
                                className={`${isOpen ? 'block' : 'hidden'} lg:mb-2 lg:pb-2 transform duration-500 ease-out`}
                            >
                                {folders.map((folder, index) => (
                                    <li key={index} className={"pb-0 mb-0"}>
                                        <a
                                            href="#"
                                            className="flex items-center p-1 pl-8 lg:p-2 lg:pl-8 w-full text-base
                                            font-normal text-gray-900 rounded-lg group hover:bg-gray-100
                                            dark:hover:bg-sidebarActive dark:text-white transition-colors
                                            duration-500 ease-in-out"
                                        >
                                            <MdFolder
                                                size={18}
                                                className="text-gray-500 dark:text-gray-400"
                                            />
                                            <span className="ms-2">{folder.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-auto mb-1 mx-1 sm:hidden lg:block">
                        <div
                            className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow
                            dark:bg-storageBackground dark:border-gray-700 transition-colors duration-500 ease-in-out">
                            <div className="flex justify-between mb-1">
                                <span
                                    className="text-sm mb-0.5 pb-0.5 font-medium text-black dark:text-white">Storage</span>
                                <a href="#"
                                   className="text-sm underline font-light text-black dark:text-white">Upgrade</a>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-gray-500 dark:bg-gray-400 h-2 rounded-full"
                                     style={{width: "92%"}}></div>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">9.2 GB of 10 GB used</span>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="p-4 bg-white sm:ml-64 dark:bg-mainDash transition-colors duration-500 ease-in-out">
                <SettingsPage/>
            </div>
        </>
    );
}
