import React from 'react';
import { Vault, Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = 'Loading...' }: LoadingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto animate-pulse">
            <Vault className="h-10 w-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-spin border-t-blue-600"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Vault of Legacy</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
          <span className="text-sm text-gray-500">Initializing secure connection...</span>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-2 w-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}