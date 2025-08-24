import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ufamLocations } from './ufamLocations';
import logo from '/src/assets/images/logo.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function CampusMapAdvanced(){ 
  const [search, setSearch] = useState('');
  const mapRef = useRef();

  useEffect(()=>{
    if(mapRef.current){
      const map = mapRef.current;
      const all = ufamLocations.map(l=> l.coords );
      map.fitBounds(all, { padding:[60,60] });
    }
  },[]);

  const handleSearch = ()=>{
    const loc = ufamLocations.find(l => l.name.toLowerCase() === search.toLowerCase());
    if(loc && mapRef.current){
      mapRef.current.setView(loc.coords, 18, { animate:true });
    } else {
      alert('Local não encontrado (use o nome exato da lista ou selecione na sugestão).');
    }
  };

  return (
    <div style={{height:'100%', display:'flex', flexDirection:'column', gap:8}}>
      <div style={{display:'flex', gap:8}} className='search-row'>
        <input list='locations' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Buscar prédio ou setor' />
        <datalist id='locations'>
          {ufamLocations.map(loc=> <option key={loc.id} value={loc.name} />)}
        </datalist>
        <button className='btn' onClick={handleSearch}>Buscar</button>
      </div>

      <div style={{flex:1}}>
        <MapContainer whenCreated={m=>mapRef.current=m} style={{height:'100%', width:'100%'}} center={[-3.069, -60.017]} zoom={15} scrollWheelZoom={true}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {ufamLocations.map(loc=> (
            <Marker key={loc.id} position={loc.coords} icon={L.icon({ iconUrl: logo, iconSize:[36,36] })}>
              <Popup><strong>{loc.name}</strong><br/>{loc.description}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}