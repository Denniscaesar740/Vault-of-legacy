import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Link, 
  Quote, 
  CheckCircle, 
  AlertTriangle, 
  Plus, 
  Filter, 
  Calendar, 
  User, 
  Globe,
  Archive,
  Bookmark,
  Edit,
  Trash2,
  ExternalLink,
  Download,
  Share2
} from 'lucide-react';

const mockResearchItems = [
  {
    id: '1',
    title: 'Birth Records - Springfield Hospital 1950',
    type: 'document',
    source: 'Springfield County Archives',
    date: '1950-03-15',
    verified: true,
    reliability: 'high',
    notes: 'Official birth certificate obtained from county records office',
    citations: ['Springfield County Birth Records, Vol. 23, Page 156'],
    tags: ['birth', 'official', 'hospital'],
    attachments: ['birth_certificate.pdf']
  },
  {
    id: '2',
    title: 'Military Service Record - John Smith',
    type: 'military',
    source: 'National Archives',
    date: '1968-1970',
    verified: true,
    reliability: 'high',
    notes: 'Service record from Vietnam War era, includes commendations',
    citations: ['National Personnel Records Center, Military Personnel File'],
    tags: ['military', 'vietnam', 'service'],
    attachments: ['service_record.pdf', 'commendations.pdf']
  },
  {
    id: '3',
    title: 'Immigration Records - Ellis Island',
    type: 'immigration',
    source: 'Ellis Island Foundation',
    date: '1923-04-12',
    verified: false,
    reliability: 'medium',
    notes: 'Passenger manifest shows arrival from Ireland, need to verify spelling of surname',
    citations: ['Ellis Island Passenger Lists, Ship: SS Celtic'],
    tags: ['immigration', 'ireland', 'ellis island'],
    attachments: ['passenger_manifest.jpg']
  },
  {
    id: '4',
    title: 'Marriage License - Smith & Johnson',
    type: 'vital',
    source: 'Springfield City Hall',
    date: '1972-08-20',
    verified: true,
    reliability: 'high',
    notes: 'Original marriage license with witness signatures',
    citations: ['Springfield Marriage Records, License #ML-1972-0856'],
    tags: ['marriage', 'license', 'official'],
    attachments: ['marriage_license.pdf']
  }
];

const researchSources = [
  { name: 'National Archives', type: 'government', reliability: 'high', count: 23 },
  { name: 'FamilySearch', type: 'genealogy', reliability: 'high', count: 45 },
  { name: 'Ancestry.com', type: 'genealogy', reliability: 'medium', count: 67 },
  { name: 'Local Libraries', type: 'library', reliability: 'medium', count: 12 },
  { name: 'Newspaper Archives', type: 'media', reliability: 'medium', count: 8 },
  { name: 'Personal Collection', type: 'personal', reliability: 'high', count: 156 }
];

export function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterReliability, setFilterReliability] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document': return FileText;
      case 'military': return Archive;
      case 'immigration': return Globe;
      case 'vital': return BookOpen;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Research Center</h1>
          <p className="mt-2 text-gray-600">Document sources, verify facts, and manage citations</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Bibliography
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Research
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Sources</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p className="text-2xl font-bold text-gray-900">89%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Quote className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Citations</p>
              <p className="text-2xl font-bold text-gray-900">234</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Needs Review</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Sources */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchSources.map((source) => (
            <div key={source.name} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{source.name}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getReliabilityColor(source.reliability)}`}>
                  {source.reliability}
                </span>
              </div>
              <p className="text-sm text-gray-600 capitalize">{source.type}</p>
              <p className="text-xs text-gray-500 mt-1">{source.count} records</p>
            </div>
          ))}
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
                placeholder="Search research items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="document">Documents</option>
              <option value="military">Military</option>
              <option value="immigration">Immigration</option>
              <option value="vital">Vital Records</option>
            </select>
            <select
              value={filterReliability}
              onChange={(e) => setFilterReliability(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Reliability</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Research Items */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Research Items</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {mockResearchItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div key={item.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <TypeIcon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                        {item.verified ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-orange-600" />
                        )}
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getReliabilityColor(item.reliability)}`}>
                          {item.reliability} reliability
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          {item.source}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{item.notes}</p>
                      <div className="space-y-2">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Citations:</h5>
                          <ul className="text-sm text-gray-600 ml-4">
                            {item.citations.map((citation, index) => (
                              <li key={index} className="list-disc">{citation}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Tags:</span>
                          {item.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.attachments.length > 0 && (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Attachments:</span>
                            {item.attachments.map((attachment, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                <FileText className="h-3 w-3 mr-1" />
                                {attachment}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}