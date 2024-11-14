import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Skeleton } from "@/components/ui/Skeleton";
import { useQuery } from "@tanstack/react-query";
import {
  BatteryCharging,
  Camera,
  Cpu,
  MemoryStick,
  Monitor,
  OctagonAlert,
  Ruler,
  Smartphone,
  Weight,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { FormProduct } from "../components/form-product";
import { Header } from "../components/header";
import { Property } from "../components/property";
import { getProductById } from "../domain/get-product-by-id";

export function ProductDetail() {
  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    gcTime: 0,
    staleTime: "infinity",
    meta: { cache: false },

    queryFn: () => getProductById(id),
  });

  return (
    <div className="min-h-screen bg-background">
      <Header
        breadcrumbs={
          <Breadcrumb className="ml-0">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <main className="container mx-auto px-4 py-8">
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
          <div className="grid grid-cols-2">
            <Skeleton className="h-[450px] w-80 mx-auto" />
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src={product.imgUrl}
              alt=""
              className="h-96 mx-auto object-contain"
            />

            <div>
              {/* TITULO */}
              <div className="flex justify-between mt-8 mb-8">
                <div>
                  <p className=" text-stone-500">
                    {product.brand.toUpperCase()}
                  </p>
                  <p className="font-bold text-2xl">{product.model}</p>
                </div>
                <p className="text-2xl text-blue-500">${product.price}</p>
              </div>

              {/* PROPIEDADES */}
              <div className="flex flex-col gap-3">
                <Property
                  icon={<Cpu className="size-5 mr-2 font-bold" />}
                  name="CPU"
                  value={product.cpu}
                />
                <Property
                  icon={<MemoryStick className="size-5 mr-2 font-bold" />}
                  name="RAM"
                  value={product.ram}
                />
                <Property
                  icon={<Smartphone className="size-5 mr-2 font-bold" />}
                  name="Sistema Operativo"
                  value={product.os}
                />
                <Property
                  icon={<Monitor className="size-5 mr-2 font-bold" />}
                  name="Resolución pantalla"
                  value={product.displayResolution}
                />
                <Property
                  icon={<BatteryCharging className="size-5 mr-2 font-bold" />}
                  name="Bateria"
                  value={product.battery}
                />
                <Property
                  icon={<Camera className="size-5 mr-2 font-bold" />}
                  name="Cámara primaria"
                  value={product.primaryCamera}
                />
                <Property
                  icon={<Camera className="size-5 mr-2 font-bold" />}
                  name="Cámara secundaria"
                  value={product.secondaryCamera}
                />
                <Property
                  icon={<Ruler className="size-5 mr-2 font-bold" />}
                  name="Dimensiones"
                  value={product.dimentions}
                />
                <Property
                  icon={<Weight className="size-5 mr-2 font-bold" />}
                  name="Peso"
                  value={product.weight}
                />
              </div>

              {/* OPCIONES */}
              <div className="mt-8">
                <FormProduct
                  colors={product.colors}
                  idProduct={id}
                  storages={product.storages}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
