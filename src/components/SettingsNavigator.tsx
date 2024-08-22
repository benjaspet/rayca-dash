"use client";
import React from "react";

export enum SettingsNavigatorPages {
    General = "General",
    Security = "Security",
    Billing = "Billing",
    Notifications = "Notifications",
    Apps = "Apps",
    Branding = "Branding",
    ReferAFriend = "Refer a friend",
    Sharing = "Sharing"
}

interface ISettingsNavigatorProps {
    activePage: SettingsNavigatorPages;
    onPageChange: (page: SettingsNavigatorPages) => void;
}

const SettingsNavigator: React.FC<ISettingsNavigatorProps> = ({ activePage, onPageChange }) => {
    const [activeTab, setActiveTab] = React.useState<SettingsNavigatorPages>(activePage);

    const navigatorButtons = [
        { name: SettingsNavigatorPages.General, active: false },
        { name: SettingsNavigatorPages.Security, active: false },
        { name: SettingsNavigatorPages.Billing, active: false },
        { name: SettingsNavigatorPages.Notifications, active: false },
        { name: SettingsNavigatorPages.Apps, active: false },
        { name: SettingsNavigatorPages.Branding, active: false },
        { name: SettingsNavigatorPages.ReferAFriend, active: false },
        { name: SettingsNavigatorPages.Sharing, active: false }
    ];

    const handleTabClick = (page: SettingsNavigatorPages) => {
        setActiveTab(page);
        onPageChange(page);
    };

    return (
        <div className={"mb-4 md:px-4"}>
            <div className="flex justify-center flex-wrap flex-row lg:block shadow-sm" role="group">
                {navigatorButtons.map((button, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`${activeTab === button.name ? "dark:bg-sidebarActive" : "dark:bg-mainDash"} 
                        rounded px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 
                        focus:z-10 focus:ring-0 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 
                        dark:text-white dark:hover:text-white dark:hover:bg-sidebarActive dark:focus:ring-blue-500 
                        dark:focus:text-white w-full sm:w-auto transition-colors duration-500 ease-in-out`}
                        onClick={() => handleTabClick(button.name)}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SettingsNavigator;
