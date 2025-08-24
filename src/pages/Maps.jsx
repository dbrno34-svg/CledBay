import React from 'react';
import CampusMapAdvanced from '../components/mapa/CampusMapAdvanced';

export default function Maps(){
  return (
    <div>
      <h2 style={{color:'#5b2c87', marginBottom:12}}>Mapa do Campus</h2>
      <div className='card map-wrapper'>
        <CampusMapAdvanced />
      </div>
    </div>
  );
}