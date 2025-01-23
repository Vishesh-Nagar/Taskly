import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';
import './Header.css';

const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header-title">Taskly</div>
            <button
                className="header-button"
                onClick={() => (isAuthenticated ? dispatch(logout()) : dispatch(login()))}
            >
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </header>
    );
};

export default Header;