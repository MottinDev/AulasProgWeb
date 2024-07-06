import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ItemEstoque } from './types';

interface FormularioProps {
  adicionarItem: (item: ItemEstoque) => void;
}

const FormularioAdicionarItem: React.FC<FormularioProps> = ({ adicionarItem }) => {
  const [novoItem, setNovoItem] = useState<ItemEstoque>({
    id: 0,
    nome: '',
    quantidade: 0,
    preco: 0
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoItem(prevItem => ({
      ...prevItem,
      [name]: name === 'quantidade' || name === 'preco' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarItem({ ...novoItem, id: Math.random() });
    setNovoItem({
      id: 0,
      nome: '',
      quantidade: 0,
      preco: 0
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={novoItem.nome} onChange={handleChange} />
      </div>
      <div>
        <label>Quantidade:</label>
        <input type="number" name="quantidade" value={novoItem.quantidade} onChange={handleChange} />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" name="preco" value={novoItem.preco} onChange={handleChange} step="0.01" />
      </div>
      <button type="submit">Adicionar Item</button>
    </form>
  );
};

export default FormularioAdicionarItem;
