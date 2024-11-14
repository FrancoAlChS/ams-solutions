import { describe, expect, test } from "vitest";
import { addProductFetch } from "./add-product-fetch";

describe("addProductFetch", () => {
  test("Registrar producto en el carrito", async () => {
    const result = await addProductFetch({
      colorCode: 1000,
      id: "8hKbH2UHPM_944nRHYN1n",
      storageCode: 2000,
    });

    expect(result).toBe(true);
  });

  test("Error al registrar producto en el carrito", async () => {
    const result = await addProductFetch({});
    expect(result).toBe(false);
  });
});
