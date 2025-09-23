export default async function Cart() {
  const res = await fetch("http://localhost:3000/api/cart");
  const data = await res.json();

  return (
    <div className="cart-container">
      <h1 className="cart-title">{data.title}</h1>
      {data.items.map((item) => (
        <div key={item.id} className="cart-item">
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-price">${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
