import React from 'react';
import StatsCard from '../components/painel/StatsCard';
import TopProducts from '../components/painel/TopProducts';
import SalesChart from '../components/painel/SalesChart';

export default function Dashboard(){
  return (
    <div style={{display:'grid',gap:16}}>
      <div style={{display:'flex',gap:12}}>
        <StatsCard title="Receita Total" value="R$ 0,00" icon={null} trend="0%" trendType="up" />
        <StatsCard title="Fornecedores" value="0" icon={null} trend="0%" trendType="up" />
        <StatsCard title="Produtos" value="0" icon={null} trend="0%" trendType="up" />
      </div>
      <div style={{display:'flex',gap:16}}>
        <div style={{flex:1}}><TopProducts products={[]} /></div>
        <div style={{flex:1}}><SalesChart sales={[]} /></div>
      </div>
    </div>
  );
}