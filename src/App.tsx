import logo from './stackline_logo.svg';
import './App.css';
import Table from './components/Table';
import ProductCard from './components/ProductCard';
import SalesChart from './components/SalesChart';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="container">
          <div className="left-component">
           <ProductCard />
          </div>
          <div className="right-component">
            <div className="top-right">
              <SalesChart />
            </div>
            <div className="bottom-right">
              <Table />
             </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default App;

