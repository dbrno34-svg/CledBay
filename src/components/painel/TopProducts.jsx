import React from 'react';
export default function TopProducts({products}){
  return (
    <div className='card'>
      <h3 style={{color:'#5b2c87'}}>Produtos Mais Vendidos</h3>
      <div style={{marginTop:8}}>
        {products.length===0? <p>Nenhum produto cadastrado</p> : products.map(p=>(
          <div key={p.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}>
            <div>{p.name}</div>
            <div>R$ {p.price?.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}