import LeftSidebar from '../components/LeftSidebar';
import CenterFeed from '../components/CenterFeed';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Center Content - Main Feed */}
      <main className="center-content">
        <CenterFeed />
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="widget-placeholder">
          <h3>🎯 Trending</h3>
          <p>Trending content will appear here</p>
          <p className="placeholder-note">
            (Waiting for right section details)
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Home;
