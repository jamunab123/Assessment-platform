// src/components/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Bell, LogOut, User } from 'lucide-react';
import { logout } from '../../store/slices/authSlice';
import type { RootState } from '../../store';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="ml-4">
              <span className="text-xl font-bold text-primary-600">Assessment Platform</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <User className="h-6 w-6" />
                <span className="ml-2">{user?.name}</span>
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
            >
              <LogOut className="h-6 w-6" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;