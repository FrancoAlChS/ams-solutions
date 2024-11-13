import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { OctagonAlert, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export function ListProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://itx-frontend-test.onrender.com/api/product").then((res) =>
        res.json()
      ),
  });

  const [search, setSearch] = useState("");

  const filterProducts = useMemo(() => {
    if (!products) return undefined;
    return products.filter(
      (product) =>
        product.model
          .trim()
          .toUpperCase()
          .includes(search.trim().toUpperCase()) ||
        product.brand.trim().toUpperCase().includes(search.trim().toUpperCase())
    );
  }, [products, search]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        breadcrumbs={
          <Breadcrumb className="ml-0">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Productos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <h1 className="text-xl font-semibold">Listado de productos</h1>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Buscar productos..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {!isLoading && error && (
          <Alert variant="destructive">
            <OctagonAlert className="h-4 w-4" />
            <AlertTitle>Ups!</AlertTitle>
            <AlertDescription>
              No se pudo obtener los productos
            </AlertDescription>
          </Alert>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <Skeleton
                  key={`skeleton-${i}`}
                  className="h-[354px] rounded-xl"
                />
              ))}
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((product) => (
              <Link
                key={`producto${product.id}`}
                to={`/producto/${product.id}`}
              >
                <Card className="cursor-pointer">
                  <CardContent className="py-2 ">
                    <img
                      src={product.imgUrl}
                      alt={`Producto-${product.id}`}
                      className="h-64 mx-auto object-contain"
                    />
                  </CardContent>
                  <CardFooter className="justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-stone-500">
                        {product.brand.toUpperCase()}
                      </span>
                      <span className="font-bold text-lg">{product.model}</span>
                    </div>
                    <span className="font-semibold">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
