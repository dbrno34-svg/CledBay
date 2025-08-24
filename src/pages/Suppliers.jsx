import React from 'react';
import SuccessMessage from '../components/fornecedores/SuccessMessage';

export default function Suppliers(){ 
  const handleReset = () => alert('Resetar formulário');
  return <SuccessMessage onReset={handleReset} />;
}