import React from 'react';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';
import FileLayout from './workflow/file-layout/FileLayout';
import Header from './components/header/Header';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className="App">
      <Layout header={<Header handleDrawerToggle={handleDrawerToggle} />} sidebarComponent={<Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>} mainContent={<FileLayout />}/>
    </div>
  );
}

export default App;
