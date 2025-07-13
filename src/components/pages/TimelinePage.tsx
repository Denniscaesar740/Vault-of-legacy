import React, { useState } from 'react';
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  Edit, 
  Trash2, 
  ImageIcon, 
  FileText,
  Filter,
  Search
} from 'lucide-react';

const mockEvents = [
  {
    id: '1',
    title: 'Birth of John Smith',
    description: 'Born in Springfield Hospital',
    date: '1950-03-15',
    type: 'milestone',
    location: 'Springfield, IL',
    assets: ['birth_certificate.pdf', 'hospital_photo.jpg']
  },
  {
    id: '2',
    title: 'First Day of School',
    description: 'Started kindergarten at Lincoln Elementary',
    date: '1955-09-01',
    type: 'event',
    location: 'Springfield, IL',
    assets: ['school_photo.jpg']
  },
  {
    id: '3',
    title: 'High School Graduation',
    description: 'Graduated valedictorian from Springfield High',
    date: '1968-06-15',
    type: 'achievement',
    location: 'Springfield, IL',
    assets: ['diploma.pdf', 'graduation_photo.jpg', 'speech.mp3']
  },
  {
    id: '4',
    title: 'Wedding Day',
    description: 'Married Mary Johnson at St. Mary\'s Church',
    date: '1972-08-20',
    type: 'milestone',
    location: 'Springfield, IL',
    assets: ['wedding_photos.zip', 'marriage_certificate.pdf']
  },
  {
    id: '5',
    title: 'First Child Born',
    description: 'Sarah Smith was born',
    date: '1975-04-10',
    type: 'milestone',
    location: 'Springfield, IL',
    assets: ['baby_photos.jpg', 'birth_announcement.pdf']
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'milestone': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'event': return 'bg-green-100 text-green-800 border-green-200';
    case 'achievement': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function TimelinePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showAddEvent, setShowAddEvent] = useState(false);

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Timeline</h1>
          <p className="mt-2 text-gray-600">Chronicle your life's journey through time</p>
        </div>
        <button
          onClick={() => setShowAddEvent(true)}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Events</p>
              <p className="text-2xl font-bold text-gray-900">{mockEvents.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Years Covered</p>
              <p className="text-2xl font-bold text-gray-900">25</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Locations</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ImageIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Assets</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="milestone">Milestones</option>
              <option value="event">Events</option>
              <option value="achievement">Achievements</option>
            </select>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8">
            {sortedEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="relative flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-200 rounded-full z-10">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                
                {/* Event content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          {event.location && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          )}
                        </div>
                        {event.assets.length > 0 && (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Assets:</span>
                            <div className="flex space-x-1">
                              {event.assets.map((asset, assetIndex) => (
                                <span key={assetIndex} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                  <FileText className="h-3 w-3 mr-1" />
                                  {asset}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-white">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-white">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}