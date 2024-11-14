import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/Breadcrumb";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { Header } from "./header";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header
          breadcrumbs={
            <Breadcrumb role="Breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Productos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          }
        />
      </MemoryRouter>
    );
  });
  afterEach(cleanup);

  test("Deberia mostrarse el titulo de la pagina", () => {
    expect(screen.getByText("Store Movil")).toBeDefined();
  });

  test("Deberia renderizar el valor de la propiedad breadcrumbs", () => {
    expect(screen.getByRole("Breadcrumb")).toBeDefined();
  });

  test("Deberia iniciar el contador del carrito en 0", () => {
    expect(screen.getByText("0")).toBeDefined();
  });
});
