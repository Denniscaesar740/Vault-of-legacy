import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Vault, 
  Clock, 
  FolderOpen, 
  Archive, 
  ImageIcon, 
  Search, 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  Download 
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', page: 'dashboard', icon: LayoutDashboard },
    { name: 'Vault', page: 'vault', icon: Vault },
    { name: 'Timeline', page: 'timeline', icon: Clock },
    { name: 'Collections', page: 'collections', icon: FolderOpen },
    { name: 'Archive', page: 'archive', icon: Archive },
    { name: 'Gallery', page: 'gallery', icon: ImageIcon },
    { name: 'Research', page: 'research', icon: Search },
    { name: 'Users', page: 'users', icon: Users },
    { name: 'Analytics', page: 'analytics', icon: BarChart3 },
    { name: 'Settings', page: 'settings', icon: Settings },
    { name: 'Templates', page: 'templates', icon: FileText },
    { name: 'Export', page: 'export', icon: Download },
  ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

  return (
    <div className="fixed inset-y-0 z-50 flex w-72 flex-col lg:flex">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-xl">
        <div className="flex h-16 shrink-0 items-center">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-indigo-600">
              <Vault className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Vault of Legacy</h1>
              <p className="text-sm text-gray-500">Digital Heritage Platform</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onPageChange(item.page)}
                      className={classNames(
                        currentPage === item.page
                          ? 'bg-teal-50 text-teal-700 border-r-2 border-teal-600'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-l-md p-3 text-sm leading-6 font-medium transition-colors duration-200 w-full text-left'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          currentPage === item.page ? 'text-teal-600' : 'text-gray-400 group-hover:text-teal-600',
                          'h-5 w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <button
                onClick={logout}
                className="group flex gap-x-3 rounded-l-md p-3 text-sm leading-6 font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 w-full text-left"
              >
                <svg className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Sign out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}