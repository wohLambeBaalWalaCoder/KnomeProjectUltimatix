import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatPanel from './ChatPanel';
import NotificationsPanel from './NotificationsPanel';
import CreatePostModal from './CreatePostModal';
import './Navbar.css';

function Navbar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    // Close profile dropdown when clicking elsewhere
    const closeAllPanels = () => {
        setIsProfileOpen(false);
    };

    return (
        <>
            <nav className="knome-navbar">
                {/* Platform Identity - Left */}
                <div className="navbar-left">
                    <Link to="/" className="navbar-brand">
                        <div className="ultimatix-logo">
                            <div className="logo-icon">
                                <span className="logo-u">U</span>
                            </div>
                        </div>
                        <span className="knome-logo">
                            kno<span className="underline-me">me</span>
                        </span>
                    </Link>
                </div>

                {/* Search & Discovery - Center */}
                <div className="navbar-center">
                    <div className="search-container">
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for people, content and communities..."
                        />
                    </div>
                </div>

                {/* Action Icons - Right */}
                <div className="navbar-right">
                    <div className="action-icons">
                        <button
                            className={`action-btn ${isChatOpen ? 'active' : ''}`}
                            title="Messages"
                            onClick={() => {
                                setIsChatOpen(!isChatOpen);
                                setIsNotificationsOpen(false);
                                setIsCreateOpen(false);
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </button>

                        <button
                            className={`action-btn ${isNotificationsOpen ? 'active' : ''}`}
                            title="Notifications"
                            onClick={() => {
                                setIsNotificationsOpen(!isNotificationsOpen);
                                setIsChatOpen(false);
                                setIsCreateOpen(false);
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            <span className="notification-badge">3</span>
                        </button>

                        <button
                            className={`action-btn create-btn ${isCreateOpen ? 'active' : ''}`}
                            title="Create Post"
                            onClick={() => {
                                setIsCreateOpen(!isCreateOpen);
                                setIsChatOpen(false);
                                setIsNotificationsOpen(false);
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                        </button>
                    </div>

                    {/* User Profile */}
                    <div className="user-profile">
                        <button
                            className="profile-btn"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            <div className="avatar">
                                <span>AK</span>
                            </div>
                            <svg
                                className={`dropdown-arrow ${isProfileOpen ? 'open' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {isProfileOpen && (
                            <div className="profile-dropdown">
                                <Link to="/profile" className="dropdown-item" onClick={closeAllPanels}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    My Profile
                                </Link>
                                <Link to="/profile" className="dropdown-item" onClick={closeAllPanels}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <line x1="3" y1="9" x2="21" y2="9" />
                                        <line x1="9" y1="21" x2="9" y2="9" />
                                    </svg>
                                    My Wall
                                </Link>
                                <Link to="/profile" className="dropdown-item" onClick={closeAllPanels}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                    Settings
                                </Link>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item logout">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Panels */}
            <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            <NotificationsPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
            <CreatePostModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
        </>
    );
}

export default Navbar;
