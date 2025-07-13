import React, { useState } from 'react';
import { 
  Upload, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Download, 
  Trash2, 
  Eye, 
  Share2,
  FolderPlus,
  ImageIcon,
  FileText,
  Video,
  Music,
  MoreHorizontal
} from 'lucide-react';

const mockAssets = [
  { id: '1', name: 'Family_Portrait_1965.jpg', type: 'image', size: '2.4 MB', uploadedAt: '2024-01-15', tags: ['family', 'vintage'] },
  { id: '2', name: 'Wedding_Certificate.pdf', type: 'document', size: '1.2 MB', uploadedAt: '2024-01-14', tags: ['documents', 'marriage'] },
  { id: '3', name: 'Grandpa_Stories.mp4', type: 'video', size: '45.6 MB', uploadedAt: '2024-01-13', tags: ['stories', 'oral history'] },
  { id: '4', name: 'Old_Songs.mp3', type: 'audio', size: '8.9 MB', uploadedAt: '2024-01-12', tags: ['music', 'heritage'] },
  { id: '5', name: 'Birth_Certificate.pdf', type: 'document', size: '0.8 MB', uploadedAt: '2024-01-11', tags: ['documents', 'official'] },
  { id: '6', name: 'Childhood_Photos.zip', type: 'archive', size: '156.3 MB', uploadedAt: '2024-01-10', tags: ['photos', 'childhood'] },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'image': return ImageIcon;
    case 'document': return FileText;
    case 'video': return Video;
    case 'audio': return Music;
    default: return FileText;
  }
};

export function VaultPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const filteredAssets = mockAssets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleAssetSelection = (assetId: string) => {
    setSelectedAssets(prev =>
      prev.includes(assetId)
        ? prev.filter(id => id !== assetId)
        : [...prev, assetId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Digital Vault</h1>
          <p className="mt-2 text-gray-600">Manage and organize your digital assets</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Folder
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Storage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ImageIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Images</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Documents</p>
              <p className="text-2xl font-bold text-gray-900">856</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Videos</p>
              <p className="text-2xl font-bold text-gray-900">234</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Music className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Audio</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
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
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedAssets.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-800">
              {selectedAssets.length} asset{selectedAssets.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1 border border-blue-300 rounded text-sm font-medium text-blue-700 bg-white hover:bg-blue-50">
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
              <button className="inline-flex items-center px-3 py-1 border border-blue-300 rounded text-sm font-medium text-blue-700 bg-white hover:bg-blue-50">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
              <button className="inline-flex items-center px-3 py-1 border border-red-300 rounded text-sm font-medium text-red-700 bg-white hover:bg-red-50">
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assets Grid/List */}
      <div className="bg-white rounded-xl border border-gray-200">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {filteredAssets.map((asset) => {
              const FileIcon = getFileIcon(asset.type);
              return (
                <div
                  key={asset.id}
                  className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleAssetSelection(asset.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <FileIcon className="h-6 w-6 text-gray-600" />
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedAssets.includes(asset.id)}
                      onChange={() => toggleAssetSelection(asset.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 truncate mb-1">{asset.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{asset.size} • {asset.uploadedAt}</p>
                  <div className="flex flex-wrap gap-1">
                    {asset.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="p-1 bg-white rounded shadow-sm hover:bg-gray-50">
                      <MoreHorizontal className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredAssets.map((asset) => {
              const FileIcon = getFileIcon(asset.type);
              return (
                <div key={asset.id} className="flex items-center justify-between p-6 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedAssets.includes(asset.id)}
                      onChange={() => toggleAssetSelection(asset.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <FileIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{asset.name}</h3>
                      <p className="text-sm text-gray-500">{asset.size} • {asset.uploadedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                      {asset.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}