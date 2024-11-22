// src/features/admin/components/UserManagement.tsx
import React, { useState } from 'react';
import { MoreVertical, Edit2, Ban, User } from 'lucide-react';
import type { UserDetails } from '../../../types/admin';

interface UserManagementProps {
  users: UserDetails[];
  onEditUser: (id: string) => void;
  onSuspendUser: (id: string) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({
  users,
  onEditUser,
  onSuspendUser,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <input
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="candidate">Candidates</option>
            <option value="educator">Educators</option>
            <option value="admin">Admins</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4">User</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Last Active</th>
              <th className="text-left p-4">Joined</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="capitalize">{user.role}</span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${user.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                    ${user.status === 'inactive' ? 'bg-gray-100 text-gray-800' : ''}
                    ${user.status === 'suspended' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  {new Date(user.lastActive).toLocaleString()}
                </td>
                <td className="p-4 text-sm">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEditUser(user.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => onSuspendUser(user.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Ban className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;