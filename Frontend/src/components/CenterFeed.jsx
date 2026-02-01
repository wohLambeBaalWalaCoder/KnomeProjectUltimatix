import { useState } from 'react';
import './CenterFeed.css';

function CenterFeed() {
    const [sortBy, setSortBy] = useState('recent');
    const [filterBy, setFilterBy] = useState('all');
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="center-feed">
            {/* Spotlight Banner */}
            <div className="spotlight-banner">
                <div className="spotlight-content">
                    <span className="spotlight-tag">#Internal Communications</span>
                    <h2 className="spotlight-title">#BringYourBuddy</h2>
                    <p className="spotlight-text">
                        Would you pair with them for the tough sprint?
                        Refer your best teammates and earn rewards!
                    </p>
                    <button className="spotlight-btn">Refer Now →</button>
                </div>
                <div className="spotlight-visual">
                    <div className="buddy-icons">
                        <div className="buddy-icon">👨‍💻</div>
                        <div className="buddy-icon">🤝</div>
                        <div className="buddy-icon">👩‍💻</div>
                    </div>
                </div>
            </div>

            {/* Creation Toolbar */}
            <div className="creation-toolbar">
                <button className="create-btn-card">
                    <div className="btn-icon">📝</div>
                    <span>Create a Post</span>
                </button>
                <button className="create-btn-card">
                    <div className="btn-icon">📄</div>
                    <span>Write an Article</span>
                </button>
                <button className="create-btn-card">
                    <div className="btn-icon">📚</div>
                    <span>Setup a Wiki</span>
                </button>
                <button className="create-btn-card">
                    <div className="btn-icon">💼</div>
                    <span>Post a Job</span>
                </button>
            </div>

            {/* Feed Controls */}
            <div className="feed-controls">
                <div className="control-group">
                    <label>Sort By:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="recent">Most Recent</option>
                        <option value="top">Top Rated</option>
                        <option value="trending">Trending</option>
                        <option value="following">Following</option>
                    </select>
                </div>
                <div className="control-group">
                    <label>Filter By:</label>
                    <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                        <option value="all">All Content</option>
                        <option value="posts">Posts</option>
                        <option value="articles">Articles</option>
                        <option value="videos">Videos</option>
                        <option value="wikis">Wikis</option>
                    </select>
                </div>
            </div>

            {/* Feed Posts Placeholder */}
            <div className="feed-posts">
                <div className="feed-post">
                    <div className="post-header">
                        <div className="post-avatar">RS</div>
                        <div className="post-meta">
                            <span className="post-author">Rajesh Sharma</span>
                            <span className="post-time">2 hours ago • Java Developers Community</span>
                        </div>
                        <div className="post-views">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            2.4K views
                        </div>
                    </div>
                    <div className="post-content">
                        <p>Just finished implementing a new microservices architecture for our client. Here are the key learnings from handling 10K+ requests per second... 🚀</p>

                        {!isExpanded && (
                            <button className="view-more-btn" onClick={() => setIsExpanded(true)}>
                                View More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                        )}

                        {isExpanded && (
                            <>
                                <p>Key highlights from the implementation:</p>
                                <ul className="post-list">
                                    <li>✅ Implemented Circuit Breaker pattern for fault tolerance</li>
                                    <li>✅ Used Kafka for async message processing</li>
                                    <li>✅ Redis caching reduced DB load by 60%</li>
                                    <li>✅ Kubernetes auto-scaling handled traffic spikes</li>
                                </ul>
                                <p>The entire migration took 3 sprints with zero downtime. Happy to share the detailed architecture doc with anyone interested!</p>
                                <div className="post-image">
                                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop" alt="Microservices Architecture Diagram" />
                                </div>
                                <div className="post-tags">
                                    <span className="tag">#Microservices</span>
                                    <span className="tag">#Java</span>
                                    <span className="tag">#Kubernetes</span>
                                    <span className="tag">#Architecture</span>
                                </div>
                                <button className="view-more-btn" onClick={() => setIsExpanded(false)}>
                                    View Less
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    <div className="post-actions">
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                            </svg>
                            124
                        </button>
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            18
                        </button>
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="18" cy="5" r="3" />
                                <circle cx="6" cy="12" r="3" />
                                <circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>

                <div className="feed-post">
                    <div className="post-header">
                        <div className="post-avatar" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>PS</div>
                        <div className="post-meta">
                            <span className="post-author">Priya Singh</span>
                            <span className="post-time">5 hours ago • AI/ML Community</span>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>🎉 Excited to share that our team won the TCS Innovation Award for our ML-powered automation tool! Thanks to everyone who supported us.</p>
                    </div>
                    <div className="post-actions">
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                            </svg>
                            256
                        </button>
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            42
                        </button>
                        <button className="post-action-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="18" cy="5" r="3" />
                                <circle cx="6" cy="12" r="3" />
                                <circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterFeed;
