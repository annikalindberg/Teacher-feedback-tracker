import React from 'react';
import { GroupCard } from './GroupCard';
import type { Group } from '../types';

interface GroupListProps {
  groups: Group[];
  onToggleGroup: (id: number) => void;
  onRemoveGroup: (id: number) => void;
}

export function GroupList({ groups, onToggleGroup, onRemoveGroup }: GroupListProps) {
  if (groups.length === 0) {
    return (
      <div className="col-span-2 text-center py-12">
        <p className="text-gray-500 text-lg">No groups yet. Add your first group to get started!</p>
      </div>
    );
  }

  return (
    <>
      {groups.map(group => (
        <GroupCard
          key={group.id}
          group={group}
          onToggle={onToggleGroup}
          onRemove={onRemoveGroup}
        />
      ))}
    </>
  );
}