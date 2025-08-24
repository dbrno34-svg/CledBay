import React from 'react';
export default function SuccessMessage({ onReset }){
  return (
    <div className='card' style={{maxWidth:640, margin:'0 auto', textAlign:'center'}}>
      <div style={{width:80,height:80, margin:'0 auto 16px', borderRadius:40, background:'linear-gradient(90deg,#34d399,#10b981)', display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
      <h2 style={{color:'#5b2c87'}}>Cadastro Realizado com Sucesso!</h2>
      <p>Obrigado por se cadastrar no CledBay. Sua solicitação será analisada.</p>
      <div style={{marginTop:16}}>
        <button className='btn' onClick={onReset}>Cadastrar Outro Fornecedor</button>
      </div>
    </div>
  );
}