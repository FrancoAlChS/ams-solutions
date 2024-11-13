import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://itx-frontend-test.onrender.com/api/product")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

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
            <Input placeholder="Buscar productos..." className="pl-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={`producto${product.id}`} to={`/producto/${product.id}`}>
              <Card className="cursor-pointer">
                <CardContent className="py-2">
                  <img
                    src={product.imgUrl}
                    alt={`Producto-${product.id}`}
                    className="w-full h-64 object-contain"
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
      </main>
    </div>
  );
}
