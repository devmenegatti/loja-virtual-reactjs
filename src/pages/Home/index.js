import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from "../../utils/format";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {console.log(products)}
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="Smartphone"/>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
