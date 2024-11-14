export async function addProductFetch(body) {
  try {
    const response = await fetch(
      "https://itx-frontend-test.onrender.com/api/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (data.code === 0) throw new Error("No se pudo registrar el producto");

    return true;
  } catch {
    return false;
  }
}
