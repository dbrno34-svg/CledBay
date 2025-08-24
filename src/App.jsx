import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import Maps from './pages/Maps';

function Sidebar() {
  const location = useLocation();
  const items = [
    {title:'Home', to:'/'},
    {title:'Dashboard', to:'/dashboard'},
    {title:'Fornecedores', to:'/suppliers'},
    {title:'Mapa', to:'/maps'}
  ];
  return (
    <div className='sidebar'>
      <div className='logo' style={{marginBottom:16}}>
        <img src="/src/assets/images/logo.png" alt="CledBay" />
        <div>
          <div style={{fontWeight:700,color:'#5b2c87'}}>CledBay</div>
          <div style={{fontSize:12,color:'#8b5fbf'}}>Marketplace Universitário</div>
        </div>
      </div>
      <nav className='nav' style={{marginTop:12}}>
        {items.map(i=> (
          <Link key={i.to} to={i.to} className={location.pathname===i.to ? 'active' : ''}>{i.title}</Link>
        ))}
      </nav>
    </div>
  );
}

export default function App(){
  return (
    <Router>
      <div className='app-layout'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/suppliers' element={<Suppliers/>} />
            <Route path='/maps' element={<Maps/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
