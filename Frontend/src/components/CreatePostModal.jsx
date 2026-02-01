import { useState } from 'react';
import './CreatePostModal.css';

function CreatePostModal({ isOpen, onClose }) {
    const [postType, setPostType] = useState('status');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Submit to backend
        console.log({ postType, title, content });
        alert('Post created successfully!');
        setContent('');
        setTitle('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="create-post-modal">
                <div className="modal-header">
                    <h3>Create New Post</h3>
                    <button className="close-btn" onClick={onClose}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="post-type-tabs">
                    <button
                        className={`type-tab ${postType === 'status' ? 'active' : ''}`}
                        onClick={() => setPostType('status')}
                    >
                        <span className="tab-icon">💭</span>
                        Status
                    </button>
                    <button
                        className={`type-tab ${postType === 'blog' ? 'active' : ''}`}
                        onClick={() => setPostType('blog')}
                    >
                        <span className="tab-icon">📝</span>
                        Blog
                    </button>
                    <button
                        className={`type-tab ${postType === 'question' ? 'active' : ''}`}
                        onClick={() => setPostType('question')}
                    >
                        <span className="tab-icon">❓</span>
                        Question
                    </button>
                </div>

                <form className="post-form" onSubmit={handleSubmit}>
                    {postType !== 'status' && (
                        <input
                            type="text"
                            className="post-title-input"
                            placeholder={postType === 'blog' ? 'Blog title...' : 'What would you like to ask?'}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    )}

                    <textarea
                        className="post-content-input"
                        placeholder={
                            postType === 'status'
                                ? "What's on your mind?"
                                : postType === 'blog'
                                    ? 'Write your blog content here...'
                                    : 'Provide more details about your question...'
                        }
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={postType === 'status' ? 4 : 8}
                    />

                    <div className="post-actions-bar">
                        <div className="attachment-actions">
                            <button type="button" className="attach-btn" title="Add Image">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </button>
                            <button type="button" className="attach-btn" title="Add Code">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </button>
                            <button type="button" className="attach-btn" title="Add Link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </button>
                            <button type="button" className="attach-btn" title="Tag Community">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                            </button>
                        </div>

                        <div className="submit-actions">
                            <button type="button" className="draft-btn" onClick={onClose}>
                                Save Draft
                            </button>
                            <button type="submit" className="publish-btn">
                                Publish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePostModal;
