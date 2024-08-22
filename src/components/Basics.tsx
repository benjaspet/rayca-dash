import React from "react";
import {Button} from "flowbite-react";
import {MdOutlineCheckCircle} from "react-icons/md";

const Basics: React.FC = () => {
    return (
        <div className={"my-5 md:mx-4 bg-white dark:bg-mainDash transition-colors duration-500 ease-in-out"}>
            <div className={"mb-4"}>
                <h3 className={"text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-500 ease-in-out"}>
                    Basics
                </h3>
            </div>
            <div className="border-t border-gray-500 rounded dark:border-basicsDivider">
                <div className="py-4 border-b border-gray-200 dark:border-mainDash">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold dark:text-white dark:font-medium">Password</span>
                                <span className="text-sm dark:text-gray-400 mt-1 me-1 md:w-[220px] ">
                                    Set a password to protect your account.
                                </span>
                            </div>
                            <div className="hidden lg:flex items-center ml-10 text-green-500 transition-colors duration-500 ease-in-out">
                                <p className="ml-2 me-2 text-black dark:text-white">***********</p>
                                <MdOutlineCheckCircle className={"me-1"}/>
                                <span className="text-sm font-medium">Very secure</span>
                            </div>
                        </div>
                        <Button size="sm" className="ml-auto text-black dark:text-gray-300 dark:bg-sidebar border-gray-600">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500 rounded dark:border-basicsDivider pt-4">
                <div className="dark:border-mainDash">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold dark:text-white dark:font-medium">Two-step verification</span>
                                <span className="text-sm text-gray-400 mt-1 me-1 w-full md:w-[220px]">
                                    We recommend requiring a verification code in addition to your password.
                                </span>
                            </div>
                            <div className="hidden md:flex-row md:items-center lg:block ml-10">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none
                                    peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
                                    rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                                    after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                    after:bg-white after:border-gray-300 after:border after:rounded-full
                                    after:h-5 after:w-5 after:transition-all dark:border-gray-600
                                    peer-checked:bg-blue-600"></div>
                                    <span className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Two-step verification
                                    </span>
                                </label>
                            </div>
                        </div>
                        <Button size="sm" className="ml-4 text-black dark:bg-sidebar dark:text-gray-300 border-gray-600">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basics;