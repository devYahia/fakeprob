fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const p1 = products.find((p) => p.id === 1);
    const p3 = products.find((p) => p.id === 3);
    const p4 = products.find((p) => p.id === 4);

    const total = p1.price * 3 + p4.price * 4 + p3.price * 5;
    console.log(`Total Price for Seif: ${total.toFixed(2)} EGP`);
  })
  .catch((err) => console.error("Error fetching data:", err));
