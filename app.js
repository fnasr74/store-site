const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyKZi9hu4FPbMsmgtZlKYNjeIhBg4FROqGi35D1e_0Q6xkzcTmLOsbZrhUlaXMRomxzPg/exec"; // ⚠️ حط لينك Google Script هنا

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    city: city.value,
    address: address.value,
    notes: "Order from GitHub site",
    items: [
      {
        title: title.value,
        price: Number(price.value),
        qty: Number(qty.value)
      }
    ],
    total_egp: Number(price.value) * Number(qty.value)
  };

  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert("Order sent: " + result.orderId);
});
