import { useState } from 'react';
import type { Group } from '../types';

export function useGroups(initialCount: number = 8) {
  const [groups, setGroups] = useState<Group[]>(
    Array.from({ length: initialCount }, (_, i) => ({
      id: i + 1,
      checked: false,
      date: null,
    }))
  );

  const toggleGroup = (id: number) => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === id
          ? {
              ...group,
              checked: !group.checked,
              date: !group.checked ? new Date().toISOString() : null,
            }
          : group
      )
    );
  };

  const addGroup = () => {
    const newId = Math.max(...groups.map(g => g.id), 0) + 1;
    setGroups(prevGroups => [
      ...prevGroups,
      {
        id: newId,
        checked: false,
        date: null,
      }
    ]);
  };

  const removeGroup = (id: number) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== id));
  };

  const getProgressPercentage = () => {
    const checkedCount = groups.filter(group => group.checked).length;
    return groups.length > 0 ? (checkedCount / groups.length) * 100 : 0;
  };

  return {
    groups,
    toggleGroup,
    addGroup,
    removeGroup,
    getProgressPercentage,
  };
}