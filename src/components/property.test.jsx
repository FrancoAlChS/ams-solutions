import { cleanup, render, screen } from "@testing-library/react";
import { MemoryStick } from "lucide-react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Property } from "./property";

describe("Property", () => {
  beforeEach(() => {
    render(
      <Property
        icon={<MemoryStick role="MemoryStick" />}
        name="ram"
        value="2 GB"
      />
    );
  });
  afterEach(cleanup);

  test("Deberia renderizar el valor de la propiedad value", () => {
    expect(screen.getByText("2 GB")).toBeDefined();
  });

  test("Deberia renderizar el valor de la propiedad name", () => {
    expect(screen.getByText("ram")).toBeDefined();
  });

  test("Deberia renderizar el valor de la propiedad icon", () => {
    expect(screen.getByRole("MemoryStick")).toBeDefined();
  });
});
