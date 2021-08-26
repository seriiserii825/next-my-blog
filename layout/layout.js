import React from 'react';
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header/>
        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;