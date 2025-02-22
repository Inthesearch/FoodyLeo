import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} - {currencyFormatter.format(quantity * price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        {quantity}
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
