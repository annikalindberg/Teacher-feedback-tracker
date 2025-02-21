import React from 'react';
import { Header } from './components/Header';
import { GroupList } from './components/GroupList';
import { useGroups } from './hooks/useGroups';

function App() {
  const {
    groups,
    toggleGroup,
    addGroup,
    removeGroup,
    getProgressPercentage,
  } = useGroups();

  const checkedCount = groups.filter(group => group.checked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Header
          groupCount={groups.length}
          checkedCount={checkedCount}
          progress={getProgressPercentage()}
          onAddGroup={addGroup}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GroupList
            groups={groups}
            onToggleGroup={toggleGroup}
            onRemoveGroup={removeGroup}
          />
        </div>
      </div>
    </div>
  );
}

export default App;