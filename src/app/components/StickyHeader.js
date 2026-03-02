'use client';
import { useState, useEffect } from 'react';

const NAMES = [
    { name: 'Aarav', city: 'Mumbai' },
    { name: 'Priya', city: 'Bangalore' },
    { name: 'Rahul', city: 'Delhi' },
    { name: 'Sneha', city: 'Chennai' },
    { name: 'Vikram', city: 'Hyderabad' },
    { name: 'Ananya', city: 'Pune' },
    { name: 'Karthik', city: 'Kolkata' },
    { name: 'Divya', city: 'Ahmedabad' },
    { name: 'Arjun', city: 'Jaipur' },
    { name: 'Meera', city: 'Lucknow' },
];

export default function StickyHeader({ onCtaClick }) {
    const [minutes, setMinutes] = useState(23);
    const [seconds, setSeconds] = useState(45);
    const [notification, setNotification] = useState(NAMES[0]);
    const [timeAgo, setTimeAgo] = useState('just now');

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => {
                if (prev === 0) {
                    setMinutes(m => (m === 0 ? 29 : m - 1));
                    return 59;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const times = ['just now', '1 min ago', '2 min ago', '3 min ago', '5 min ago'];
        let idx = 0;
        const interval = setInterval(() => {
            idx = (idx + 1) % NAMES.length;
            setNotification(NAMES[idx]);
            setTimeAgo(times[Math.floor(Math.random() * times.length)]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="sticky-header" id="sticky-header">
            <div className="header-notification">
                <span className="live-dot"></span>
                <span>
                    <strong>{notification.name} from {notification.city}</strong> just registered •{' '}
                    <span className="time-ago">{timeAgo}</span>
                </span>
            </div>
            <div className="header-timer">
                <span className="timer-icon">⏳</span>
                <span>Closes in</span>
                <div className="timer-digits">
                    <span className="timer-digit">{String(minutes).padStart(2, '0')}</span>
                    <span className="timer-separator">:</span>
                    <span className="timer-digit">{String(seconds).padStart(2, '0')}</span>
                </div>
            </div>
            <button className="header-cta" onClick={onCtaClick}>
                CLAIM YOUR SEAT →
            </button>
        </header>
    );
}
