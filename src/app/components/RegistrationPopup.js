'use client';
import { useState } from 'react';

export default function RegistrationPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('🎉 Registration successful! Welcome to McZeal Summer Course Camp. We\'ll contact you shortly.');
        onClose();
    };

    return (
        <div className={`popup-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div className="popup">
                <button className="popup-close" onClick={onClose}>×</button>

                <div className="popup-header">
                    <span className="popup-header-tag">🏕️ Summer Camp 2026</span>
                    <h2>Secure Your Spot at McZeal</h2>
                </div>

                <div className="popup-urgency">
                    ⚡ Only <span>47 seats</span> remaining — Registration closes soon!
                </div>

                <form className="popup-form" onSubmit={handleSubmit}>
                    <h3>Fill Out the Form to Register Now</h3>

                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Your Preferred Track</option>
                            <option value="ai-ml">AI & Machine Learning</option>
                            <option value="fullstack">Full-Stack Web Development</option>
                            <option value="data-science">Data Science & Analytics</option>
                            <option value="cybersecurity">Cybersecurity Fundamentals</option>
                            <option value="app-dev">Mobile App Development</option>
                            <option value="all-access">All-Access Pass (All Tracks)</option>
                        </select>
                    </div>

                    <button type="submit" className="form-submit">
                        🚀 RESERVE MY FREE SEAT NOW
                        <span className="form-submit-sub">Join 15,000+ students who've already enrolled</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
