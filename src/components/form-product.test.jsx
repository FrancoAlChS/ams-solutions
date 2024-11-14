import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { FormProduct } from "./form-product";

describe("formProduct", () => {
  beforeEach(() => {
    render(<FormProduct colors={[]} storages={[]} idProduct={"productoId"} />);
  });
  afterEach(cleanup);

  test("deberia renderizar el componente", () => {
    expect(screen.getByText("Agregar")).toBeDefined();
  });
});
