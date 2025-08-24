import React from 'react';
export default function StatsCard({title, value, icon:Icon, trend, trendType}){
  return (
    <div className='card' style={{flex:1}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontSize:12,color:'#8b5fbf',fontWeight:600}}>{title}</div>
        <div style={{fontSize:18,fontWeight:700}}>{value}</div>
      </div>
      <div style={{marginTop:8,color:'#6b7280'}}>{trendType==='up'? '▲' : '▼'} {trend}</div>
    </div>
  );
}