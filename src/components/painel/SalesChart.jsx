import React from 'react';
export default function SalesChart({sales}){
  return (
    <div className='card'>
      <h3 style={{color:'#5b2c87'}}>Vendas (últimos dias)</h3>
      <div style={{height:160, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p className='muted'>Gráfico placeholder</p>
      </div>
    </div>
  );
}