import React from 'react';
import ReactDOM from 'react-dom/client';
import PortfolioPage from './Pages/Portfolio';
import Layout from './Layout';
import './output.css'; // <-- It must be here and point to the generated file in src/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <PortfolioPage />
    </Layout>
  </React.StrictMode>
);
