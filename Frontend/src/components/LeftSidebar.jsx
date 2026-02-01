import { Link } from 'react-router-dom';
import './LeftSidebar.css';

function LeftSidebar() {
    return (
        <aside className="left-sidebar">
            {/* Profile Header */}
            <div className="profile-card">
                <div className="profile-avatar">
                    <span>AK</span>
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">Avinash Kumbhar</h3>
                    <p className="profile-designation">Analyst.IoTDE 1.0</p>
                    <p className="profile-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Pune Sahyadri Park
                    </p>
                </div>
            </div>

            {/* Personal Navigation */}
            <div className="sidebar-section">
                <h4 className="section-label">My Space</h4>
                <nav className="sidebar-nav">
                    <Link to="/timeline" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="17" y1="10" x2="3" y2="10" />
                            <line x1="21" y1="6" x2="3" y2="6" />
                            <line x1="21" y1="14" x2="3" y2="14" />
                            <line x1="17" y1="18" x2="3" y2="18" />
                        </svg>
                        My Timeline
                    </Link>
                    <Link to="/communities" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Communities
                    </Link>
                    <Link to="/whats-new" className="nav-item highlight">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        What's New!
                        <span className="badge">5</span>
                    </Link>
                </nav>
            </div>

            {/* Resources & Utilities */}
            <div className="sidebar-section">
                <h4 className="section-label">Resources</h4>
                <nav className="sidebar-nav">
                    <Link to="/jobs" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        Job Posts
                    </Link>
                    <Link to="/videos" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        Video Channel
                    </Link>
                    <Link to="/podcasts" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                        Podcast
                    </Link>
                    <Link to="/hot-posts" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </svg>
                        Hot Posts
                    </Link>
                    <Link to="/dealsmart" className="nav-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        Dealsmart
                    </Link>
                </nav>
            </div>
        </aside>
    );
}

export default LeftSidebar;
