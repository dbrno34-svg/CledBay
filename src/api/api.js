const API_KEY = import.meta.env.VITE_BASE44_API_KEY || '632c7a18fa044893897ce5967a41bf9a';
const BASE = 'https://app.base44.com/api/apps/68aa629ae7650baed11bf9b3/entities';

async function fetchEntities(entity){
  const res = await fetch(`${BASE}/${entity}`, { headers:{ api_key: API_KEY, 'Content-Type':'application/json' } });
  return res.json();
}
async function updateEntity(entity, id, data){
  const res = await fetch(`${BASE}/${entity}/${id}`, { method:'PUT', headers:{ api_key: API_KEY, 'Content-Type':'application/json' }, body: JSON.stringify(data) });
  return res.json();
}

export const api = {
  getSuppliers: ()=> fetchEntities('Supplier'),
  updateSupplier: (id,data)=> updateEntity('Supplier',id,data),
  getProducts: ()=> fetchEntities('Product'),
  updateProduct: (id,data)=> updateEntity('Product',id,data),
  getSales: ()=> fetchEntities('Sale'),
  updateSale: (id,data)=> updateEntity('Sale',id,data)
};