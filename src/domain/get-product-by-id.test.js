import { describe, expect, test } from "vitest";
import { getProductById } from "./get-product-by-id";

describe("getProductById", () => {
  test("Obtener producto por el ID", async () => {
    const result = await getProductById("8hKbH2UHPM_944nRHYN1n");
    const expectResult = {
      imgUrl:
        "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
      brand: "Acer",
      model: "Liquid Z6",
      price: "120.00",
      cpu: "Quad-core 1.25 GHz Cortex-A53",
      ram: "1 GB RAM",
      os: "Android 6.0 (Marshmallow)",
      displayResolution: "5.0 inches",
      battery: "Removable Li-Ion 2000 mAh battery",
      primaryCamera: ["8 MP", "autofocus", "LED flash"],
      secondaryCamera: "2 MP",
      dimentions: "-",
      weight: "-",
      colors: [
        { code: 1000, name: "Black" },
        { code: 1001, name: "White" },
      ],
      storages: [{ code: 2000, name: "8 GB" }],
    };

    expect(JSON.stringify(result)).equal(JSON.stringify(expectResult));
  });

  test("No se encontro el producto por el ID", async () => {
    await expect(getProductById("productoId")).rejects.toThrow(
      "No se encontro el producto"
    );
  });
});
