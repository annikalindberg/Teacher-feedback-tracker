import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import type { Group } from '../types';

interface GroupCardProps {
  group: Group;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export function GroupCard({ group, onToggle, onRemove }: GroupCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        transform transition-all duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1
        ${group.checked ? 'border-2 border-purple-500' : 'border-2 border-transparent'}
      `}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onToggle(group.id)}
              className="focus:outline-none transform transition-transform duration-200 hover:scale-110"
            >
              {group.checked ? (
                <CheckCircle className="w-8 h-8 text-purple-500" />
              ) : (
                <Circle className="w-8 h-8 text-gray-300" />
              )}
            </button>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Group {group.id}
              </h2>
              {group.date && (
                <p className="text-sm text-gray-500 mt-1">
                  Reviewed: {new Date(group.date).toLocaleString()}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {group.checked && (
              <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                <span className="text-sm font-medium text-purple-600">✓</span>
              </div>
            )}
            <button
              onClick={() => onRemove(group.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 rounded-full hover:bg-red-50"
              title="Remove group"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}