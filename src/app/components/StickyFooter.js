'use client';

export default function StickyFooter({ onCtaClick }) {
    return (
        <div className="sticky-footer" id="sticky-footer">
            <div className="footer-info">
                <div className="footer-avatar">MZ</div>
                <div className="footer-text">
                    <h4>Transform Your Career This Summer</h4>
                    <p>Join McZeal Summer Course Camp & Secure Your Spot</p>
                </div>
            </div>
            <button className="footer-cta" onClick={onCtaClick}>
                <strong>Enroll at McZeal Today</strong>
                <span>Register For The Summer Camp Now</span>
            </button>
        </div>
    );
}
