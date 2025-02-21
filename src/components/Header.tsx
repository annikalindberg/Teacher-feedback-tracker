import React from 'react';
import { Users, Plus } from 'lucide-react';

interface HeaderProps {
  groupCount: number;
  checkedCount: number;
  progress: number;
  onAddGroup: () => void;
}

export function Header({ groupCount, checkedCount, progress, onAddGroup }: HeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-block p-3 bg-white rounded-full shadow-lg mb-4">
        <Users className="w-8 h-8 text-purple-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Group Feedback Tracker</h1>
      <div className="w-full max-w-md mx-auto bg-white rounded-full h-2 mb-4">
        <div 
          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-gray-600 mb-6">
        {checkedCount} of {groupCount} groups reviewed
      </p>
      <button
        onClick={onAddGroup}
        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add New Group
      </button>
    </div>
  );
}