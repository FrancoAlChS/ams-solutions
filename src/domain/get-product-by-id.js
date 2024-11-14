export async function getProductById(id) {
  const response = await fetch(
    `https://itx-frontend-test.onrender.com/api/product/${id}`
  );
  const data = await response.json();
  if (data.code === 0) throw new Error("No se encontro el producto");

  return {
    imgUrl: isEmpty(data.imgUrl),
    brand: isEmpty(data.brand),
    model: isEmpty(data.model),
    price: isEmpty(Number(data.price).toFixed(2)),
    cpu: isEmpty(data.cpu),
    ram: isEmpty(
      Array.isArray(data.ram) ? data.ram.join(" or ") : data.ram.trim()
    ),
    os: isEmpty(data.os),
    displayResolution: isEmpty(data.displayResolution),
    battery: isEmpty(data.battery),
    primaryCamera: isEmpty(data.primaryCamera),
    secondaryCamera: isEmpty(data.secondaryCmera),
    dimentions: isEmpty(data.dimentions),
    weight: isEmpty(data.weight),
    colors: isEmpty(data.options.colors),
    storages: isEmpty(data.options.storages),
  };
}

function isEmpty(value) {
  return value === undefined || value === null || value === "" ? "-" : value;
}
