import React from "react";
import Layout from "./components/layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import FileLayout from "./workflow/file-layout/FileLayout";
import Header from "./components/header/Header";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [clickedItem, setClickedItem] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onItemClick = item => {
    setClickedItem(item);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
