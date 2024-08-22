"use client";
import { useState, useEffect } from 'react';
import {FaMoon} from "react-icons/fa";

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedDarkMode !== null) {
            setDarkMode(storedDarkMode === 'true');
        } else {
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        if (darkMode !== null) {
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('darkMode', String(darkMode));
        }
    }, [darkMode]);

    return (
        <ul className="space-y-2 font-medium">
            <li>
                <a onClick={() => setDarkMode(!darkMode)}
                   className="hover:cursor-pointer flex items-center p-1 lg:p-2 text-gray-900 rounded-lg dark:text-white
                   hover:bg-gray-100 dark:hover:bg-sidebarActive group transition-colors duration-500 ease-in-out">
                    <FaMoon size={18}
                            className="text-gray-500 dark:text-gray-400 transition-colors duration-500 ease-in-out"/>
                    <span className="ms-3">Light/Dark Mode</span>
                </a>
            </li>
        </ul>
    );
}
