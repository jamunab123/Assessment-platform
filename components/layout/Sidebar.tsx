// src/components/layout/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  BarChart,
} from 'lucide-react';
import type { RootState } from '../../store';

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const getNavItems = () => {
    switch (user?.role) {
      case 'candidate':
        return [
          { path: '/candidate/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { path: '/candidate/assessments', icon: <FileText />, label: 'Assessments' },
          { path: '/candidate/results', icon: <BarChart />, label: 'Results' },
        ];
      case 'educator':
        return [
          { path: '/educator/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { path: '/educator/assessments', icon: <FileText />, label: 'Manage Assessments' },
          { path: '/educator/results', icon: <BarChart />, label: 'Results' },
        ];
      case 'admin':
        return [
          { path: '/admin/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { path: '/admin/users', icon: <Users />, label: 'Users' },
          { path: '/admin/assessments', icon: <FileText />, label: 'Assessments' },
          { path: '/admin/settings', icon: <Settings />, label: 'Settings' },
        ];
      default:
        return [];
    }
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-20 
                 ${isOpen ? 'w-64' : 'w-0 -translate-x-full'}`}
    >
      <nav className="mt-6 px-4">
        {getNavItems().map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 
               ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;