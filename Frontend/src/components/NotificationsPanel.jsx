import './NotificationsPanel.css';

function NotificationsPanel({ isOpen, onClose }) {
    const mockNotifications = [
        { id: 1, type: 'like', user: 'Priya Sharma', action: 'liked your post', content: '"Best practices for Node.js..."', time: '5m ago', read: false },
        { id: 2, type: 'comment', user: 'Rajesh Kumar', action: 'commented on your blog', content: '"Great insights on microservices!"', time: '20m ago', read: false },
        { id: 3, type: 'mention', user: 'Amit Patel', action: 'mentioned you in', content: 'Java Developers Community', time: '1h ago', read: false },
        { id: 4, type: 'follow', user: 'Sneha Reddy', action: 'started following you', content: '', time: '2h ago', read: true },
        { id: 5, type: 'badge', user: 'System', action: 'You earned a new badge!', content: '🏆 Knowledge Sharer', time: '1d ago', read: true },
        { id: 6, type: 'community', user: 'AI/ML Community', action: 'New post you might like', content: '"Introduction to LLMs"', time: '2d ago', read: true },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'like': return '❤️';
            case 'comment': return '💬';
            case 'mention': return '@';
            case 'follow': return '👤';
            case 'badge': return '🏆';
            case 'community': return '🏘️';
            default: return '🔔';
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="panel-overlay" onClick={onClose}></div>
            <div className="notifications-panel">
                <div className="panel-header">
                    <h3>Notifications</h3>
                    <button className="mark-read-btn">Mark all read</button>
                    <button className="close-btn" onClick={onClose}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="notifications-tabs">
                    <button className="tab active">All</button>
                    <button className="tab">Mentions</button>
                    <button className="tab">Communities</button>
                </div>

                <div className="notifications-list">
                    {mockNotifications.map(notif => (
                        <div key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
                            <div className="notification-icon">
                                {getIcon(notif.type)}
                            </div>
                            <div className="notification-content">
                                <p>
                                    <strong>{notif.user}</strong> {notif.action}
                                    {notif.content && <span className="highlight"> {notif.content}</span>}
                                </p>
                                <span className="notification-time">{notif.time}</span>
                            </div>
                            {!notif.read && <div className="unread-dot"></div>}
                        </div>
                    ))}
                </div>

                <button className="view-all-btn">View All Notifications</button>
            </div>
        </>
    );
}

export default NotificationsPanel;
