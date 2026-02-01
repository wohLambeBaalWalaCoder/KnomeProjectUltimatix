import './ChatPanel.css';

function ChatPanel({ isOpen, onClose }) {
    const mockChats = [
        { id: 1, name: 'Rajesh Kumar', initials: 'RK', message: 'Did you check the new API docs?', time: '2m ago', unread: true },
        { id: 2, name: 'Priya Sharma', initials: 'PS', message: 'The deployment went smooth!', time: '15m ago', unread: true },
        { id: 3, name: 'Amit Patel', initials: 'AP', message: 'Thanks for the help yesterday', time: '1h ago', unread: false },
        { id: 4, name: 'Sneha Reddy', initials: 'SR', message: 'Can we discuss the architecture?', time: '2h ago', unread: false },
        { id: 5, name: 'Vikram Singh', initials: 'VS', message: 'Meeting at 3 PM confirmed', time: '3h ago', unread: false },
    ];

    if (!isOpen) return null;

    return (
        <>
            <div className="panel-overlay" onClick={onClose}></div>
            <div className="chat-panel">
                <div className="panel-header">
                    <h3>Messages</h3>
                    <button className="close-btn" onClick={onClose}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="panel-search">
                    <input type="text" placeholder="Search messages..." />
                </div>

                <div className="chat-list">
                    {mockChats.map(chat => (
                        <div key={chat.id} className={`chat-item ${chat.unread ? 'unread' : ''}`}>
                            <div className="chat-avatar" style={{ background: chat.unread ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#ddd' }}>
                                {chat.initials}
                            </div>
                            <div className="chat-content">
                                <div className="chat-header">
                                    <span className="chat-name">{chat.name}</span>
                                    <span className="chat-time">{chat.time}</span>
                                </div>
                                <p className="chat-message">{chat.message}</p>
                            </div>
                            {chat.unread && <div className="unread-dot"></div>}
                        </div>
                    ))}
                </div>

                <button className="new-chat-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New Message
                </button>
            </div>
        </>
    );
}

export default ChatPanel;
