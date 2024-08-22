import React from "react";
import {Button} from "flowbite-react";

const AccountSecurityAlert: React.FC = () => {

    return (
        <>
            <div className="md:mx-4 relative flex transition-colors duration-500 ease-in-out">
                <ul className="
                transition-colors duration-500 ease-in-out w-full text-sm font-medium text-gray-900
                bg-white border border-gray-200 rounded-lg dark:bg-storageBackground dark:border-deviceDivider
                dark:text-white">
                    <li className="w-full lg:pe-4 p-2 sm:p-4  rounded-t-lg dark:border-mainDash">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <svg className="hidden lg:block w-16 h-16 transform -rotate-90">
                                    <circle className="text-gray-500" stroke-width="6" stroke="currentColor"
                                            fill="transparent" r="16" cx="32" cy="32"/>
                                    <circle className="text-blue-500 security-progress" stroke-width="7"
                                            stroke-dasharray="105" stroke-linecap="round" stroke="currentColor"
                                            fill="transparent" r="16" cx="32" cy="32"/>
                                </svg>
                                <div className={"m-2 md:mx-2"}>
                                    <span className="text-sm me-3">
                                        Your account security is 90%
                                    </span>
                                    <p className="text-sm text-gray-400">
                                        Please review your account security settings regularly and update your password.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:items-center gap-2 px-2 pb-2">
                                <Button color="gray" size="sm" className="w-full sm:w-auto">
                                    Dismiss
                                </Button>
                                <Button color="blue" size="sm" className="w-full sm:w-auto">
                                    Review security
                                </Button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


        </>
    );
}

export default AccountSecurityAlert;