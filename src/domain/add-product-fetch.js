export async function addProductFetch(body) {
  await fetch("https://itx-frontend-test.onrender.com/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
