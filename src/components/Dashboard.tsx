import React from 'react';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Clock,
  Upload,
  Eye,
  Download,
  Archive,
  ImageIcon,
  Video,
  Music,
  FolderOpen
} from 'lucide-react';

const stats = [
  { name: 'Total Assets', value: '12,847', change: '+12%', changeType: 'increase', icon: FileText },
  { name: 'Active Projects', value: '23', change: '+3', changeType: 'increase', icon: FolderOpen },
  { name: 'Monthly Views', value: '45,672', change: '+18%', changeType: 'increase', icon: Eye },
  { name: 'Contributors', value: '156', change: '+7', changeType: 'increase', icon: Users },
];

const recentActivity = [
  { id: 1, action: 'Uploaded', item: 'Family Photos 1950-1960', time: '2 hours ago', type: 'image' },
  { id: 2, action: 'Created', item: 'WWII Veterans Collection', time: '4 hours ago', type: 'collection' },
  { id: 3, action: 'Archived', item: 'Audio Interviews Vol. 3', time: '6 hours ago', type: 'audio' },
  { id: 4, action: 'Updated', item: 'Timeline: Industrial Revolution', time: '1 day ago', type: 'timeline' },
  { id: 5, action: 'Exported', item: 'Heritage Documentation', time: '2 days ago', type: 'document' },
];

const quickActions = [
  { name: 'Upload Media', icon: Upload, color: 'bg-blue-500' },
  { name: 'Create Timeline', icon: Clock, color: 'bg-green-500' },
  { name: 'New Collection', icon: FolderOpen, color: 'bg-purple-500' },
  { name: 'Archive Content', icon: Archive, color: 'bg-orange-500' },
];

const assetBreakdown = [
  { type: 'Images', count: 7842, icon: ImageIcon, color: 'text-blue-600' },
  { type: 'Documents', count: 3205, icon: FileText, color: 'text-green-600' },
  { type: 'Videos', count: 1456, icon: Video, color: 'text-purple-600' },
  { type: 'Audio', count: 344, icon: Music, color: 'text-orange-600' },
];

function getActivityIcon(type: string) {
  switch (type) {
    case 'image': return ImageIcon;
    case 'collection': return FolderOpen;
    case 'audio': return Music;
    case 'timeline': return Clock;
    case 'document': return FileText;
    default: return FileText;
  }
}

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your digital legacy platform.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-200">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className="h-4 w-4 flex-shrink-0 self-center" />
                        <span className="ml-1">{stat.change}</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions and Asset Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-200`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asset Breakdown */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Breakdown</h3>
            <div className="space-y-4">
              {assetBreakdown.map((asset) => (
                <div key={asset.type} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <asset.icon className={`h-5 w-5 ${asset.color} mr-3`} />
                    <span className="font-medium text-gray-900">{asset.type}</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{asset.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentActivity.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                return (
                  <li key={activity.id} className="py-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <ActivityIcon className="h-5 w-5 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}