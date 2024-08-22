"use client";
import React, {useState} from "react";
import Topbar from "@/components/Topbar";
import SettingsNavigator, {SettingsNavigatorPages} from "@/components/SettingsNavigator";
import SecuritySettingsTab from "@/pages/settings/SecuritySettingsTab";
import GenericTab from "@/pages/settings/GenericTab";

const SettingsPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<SettingsNavigatorPages>(SettingsNavigatorPages.General);

    const renderPageContent = () => {
        switch (currentPage) {
            case SettingsNavigatorPages.General:
                return <GenericTab name={"General Settings"}/>;
            case SettingsNavigatorPages.Security:
                return <SecuritySettingsTab/>;
            case SettingsNavigatorPages.Billing:
                return <GenericTab name={"Billing Settings"}/>;
            case SettingsNavigatorPages.Notifications:
                return <GenericTab name={"Notification Settings"}/>;
            case SettingsNavigatorPages.Apps:
                return <GenericTab name={"App Settings"}/>;
            case SettingsNavigatorPages.Branding:
                return <GenericTab name={"Branding Settings"}/>;
            case SettingsNavigatorPages.ReferAFriend:
                return <GenericTab name={"Refer a friend"}/>;
            case SettingsNavigatorPages.Sharing:
                return <GenericTab name={"Sharing Settings"}/>;
            default:
                return <SecuritySettingsTab/>;
        }
    };

    return (
        <>
            <Topbar/>
            <SettingsNavigator activePage={currentPage} onPageChange={setCurrentPage} />
            {renderPageContent()}
        </>
    )
}

export default SettingsPage;