import React from "react";
import Layout from "./components/layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import FileLayout from "./workflow/file-layout/FileLayout";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [clickedItem, setClickedItem] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onItemClick = item => {
    setClickedItem(item);
  };

  const layout = () => {
    return (
      <Layout
        header={<Header handleDrawerToggle={handleDrawerToggle} />}
        sidebarComponent={
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            onItemClick={onItemClick}
          />
        }
        mainContent={<FileLayout content={clickedItem} />}
      />
    )
  }

  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={layout} />
      </BrowserRouter>
      {/* <Layout
        header={<Header handleDrawerToggle={handleDrawerToggle} />}
        sidebarComponent={
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            onItemClick={onItemClick}
          />
        }
        mainContent={<FileLayout content={clickedItem} />}
      /> */}
    </div>
  );
}

export default App;
