import React from "react";
import { Button } from "flowbite-react";

const Topbar = () => {
    return (
        <>
            <div className="flex">
                <ul className="w-full text-sm font-medium text-gray-900 bg-white dark:bg-mainDash
                dark:border-deviceDivider dark:text-white transition-colors duration-500 ease-in-out">
                    <li className="w-full lg:pe-4 sm:p-4 rounded-t-lg dark:border-mainDash">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <div className={"m-2 md:mx-2"}>
                                    <h2 className="text-lg me-3">
                                        Mia de Silva
                                    </h2>
                                    <p className="text-sm text-gray-400">
                                        Manage your details and personal preferences here.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full sm:w-auto sm:items-center gap-2 pb-2">
                                <form className="max-w-md mx-auto hidden lg:block">
                                    <label htmlFor="default-search"
                                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round" strokeWidth="2"
                                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search"
                                               className="transition-colors duration-500 ease-in-out block w-full p-2
                                               ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                               focus:ring-blue-500 focus:border-blue-500 dark:bg-mainDash dark:border-gray-600
                                               dark:placeholder-gray-400 dark:text-white"
                                               placeholder="Search..." required/>
                                    </div>
                                </form>
                                <Button color="gray" size="sm" className="w-full sm:w-auto">
                                    Invite
                                </Button>
                                <Button color="blue" size="sm" className="w-full sm:w-auto">
                                    Upgrade
                                </Button>
                                <div className="relative hidden lg:block">
                                    <img
                                        className="h-8 w-8 rounded-full object-cover border-2 border-gray-300
                                        dark:border-gray-600 transition-colors duration-500 ease-in-out"
                                        src={"/profile-picture.png"}
                                        alt={"User Avatar"}
                                        width={32}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Topbar;
