export async function GET() {
  const cartData = {
    title: "Cart Page",
    items: [
      { id: 1, name: "Item A", price: 29.99 },
      { id: 2, name: "Item B", price: 15.49 },
      { id: 3, name: "Item C", price: 42.0 },
    ],
  };

  return new Response(JSON.stringify(cartData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
