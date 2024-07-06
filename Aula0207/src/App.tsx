import React, { useEffect, useState } from 'react';
import FormularioAdicionarItem from './FormularioAdicionarItem';
import { ItemEstoque } from './types';
import ListaItens from './ListaItens';
import estoqueData from './estoque.json';
import './index.css';

const App: React.FC = () => {
  const [itens, setItens] = useState<ItemEstoque[]>([]);

  useEffect(() => {
    setItens(estoqueData.itens);
  }, []);

  const adicionarItem = (item: ItemEstoque) => {
    setItens((prevItens) => [item, ...prevItens]);
  };

  const deletaItem = (id: number) => {
    setItens((prevItems: ItemEstoque[]) => [
      ...prevItems.filter((item: ItemEstoque) => item.id !== id),
    ]);
  };

  return (
    <div className="container">
      <h1>Controle de Estoque</h1>
      <FormularioAdicionarItem adicionarItem={adicionarItem} />
      <ListaItens listaItens={itens} handleDelItem={deletaItem} />
    </div>
  );
};

export default App;
