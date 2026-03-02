"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const indianNames = [
    "Sneha", "Rahul", "Priya", "Amit", "Neha",
    "Karthik", "Riya", "Vikram", "Ananya", "Rohan",
    "Shruti", "Arjun", "Kavya", "Siddharth", "Pooja",
    "Aditya", "Divya", "Varun", "Megha", "Gaurav"
];

const locations = [
    "Chennai", "Bangalore", "Hyderabad", "Mumbai", "Pune",
    "Delhi", "Kochi", "Coimbatore", "Trivandrum", "Madurai"
];

const timeAgo = [
    "1 min ago", "2 mins ago", "Just now", "3 mins ago", "5 mins ago"
];

export default function LiveNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [notification, setNotification] = useState({ name: "", location: "", time: "" });

    useEffect(() => {
        // Function to trigger a new notification
        const showNotification = () => {
            const randomName = indianNames[Math.floor(Math.random() * indianNames.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)];

            setNotification({ name: randomName, location: randomLocation, time: randomTime });
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 4000);
        };

        // Initial delay before first notification
        const initialDelay = setTimeout(() => {
            showNotification();

            // Set interval for subsequent notifications
            const interval = setInterval(() => {
                showNotification();
            }, Math.floor(Math.random() * 8000) + 7000); // Random interval between 7s and 15s

            return () => clearInterval(interval);
        }, 3000);

        return () => clearTimeout(initialDelay);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="fixed bottom-6 left-6 z-50 bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 pb-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-md"
                >
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse-fast shrink-0 mt-0.5"></div>
                    <p className="text-white text-sm font-medium">
                        <span className="font-bold">{notification.name} from {notification.location}</span> just registered <span className="text-emerald-400 ml-1">• {notification.time}</span>
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
