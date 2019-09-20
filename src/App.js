import React from 'react';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';
import FileLayout from './workflow/file-layout/FileLayout';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout sidebarComponent={<Sidebar />} mainContent={<FileLayout />}/>
    </div>
  );
}

export default App;
