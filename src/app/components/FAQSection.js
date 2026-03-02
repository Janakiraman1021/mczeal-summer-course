'use client';
import { useState } from 'react';

const FAQ_DATA = [
    {
        q: "I'm not from a tech background. Can I still join the Summer Camp?",
        a: "Absolutely! McZeal's Summer Course Camp is designed for all levels. We cover every topic from fundamentals to advanced applications, making it accessible and valuable whether you're a beginner or experienced."
    },
    {
        q: "How will this camp help me in my career or academics?",
        a: "You'll gain practical, in-demand skills in AI, web development, and data science that employers actively seek. Our hands-on projects and portfolio-building approach have helped students secure internships, freelance gigs, and top placements."
    },
    {
        q: "What if I don't have any experience with coding or AI?",
        a: "No problem at all! We start with the fundamentals and gradually move to real-world projects. Our expert mentors provide step-by-step guidance, so even complete beginners finish the camp with impressive project portfolios."
    },
    {
        q: "Will I get a certificate after completing the camp?",
        a: "Yes! You'll receive an industry-recognized McZeal certification upon completing the Summer Course Camp. This certificate validates your skills and strengthens your professional profile for jobs, internships, and higher studies."
    },
    {
        q: "What's the time commitment for the Summer Camp?",
        a: "The camp runs for 4 weeks with flexible scheduling options. We offer both intensive full-day tracks and part-time evening tracks to accommodate students and working professionals. All sessions are recorded for review."
    },
    {
        q: "What if I have questions or need support during the camp?",
        a: "McZeal provides 24/7 access to our dedicated support team, mentor office hours, peer study groups, and an active community forum. You'll never feel stuck or alone during your learning journey."
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(prev => prev === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq">
            <div className="section-container">
                <h2 className="section-title fade-in">
                    FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
                </h2>
                <div className="faq-list">
                    {FAQ_DATA.map((item, i) => (
                        <div
                            key={i}
                            className={`faq-item fade-in ${activeIndex === i ? 'active' : ''}`}
                            style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                            <div className="faq-question" onClick={() => toggle(i)}>
                                <span>{item.q}</span>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p className="faq-answer-content">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
