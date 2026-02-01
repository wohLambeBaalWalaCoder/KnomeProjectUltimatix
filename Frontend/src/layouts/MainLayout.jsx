import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
    return (
        <div className="app-layout">
            <Navbar />

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>&copy; 2026 Knome - TCS Internal Platform</p>
            </footer>
        </div>
    );
}

export default MainLayout;
