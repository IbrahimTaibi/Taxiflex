import React from 'react';
import AppNavigator from './navigations/AppNavigator';
import {UserProvider} from './contexts/userContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
