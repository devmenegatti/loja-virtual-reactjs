import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

import {
  Container,
  ProductTable,
  Total
} from './styles';

export default function Card() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://images-na.ssl-images-amazon.com/images/I/41h9X8HpvEL._SX425_.jpg" alt="produto"/>
            </td>
            <td>
              <strong>Xioami Redmi 8</strong>
              <span>R$1099,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2}/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$2198,98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1099,99</strong>
        </Total>
      </footer>
    </Container>
  );
}
