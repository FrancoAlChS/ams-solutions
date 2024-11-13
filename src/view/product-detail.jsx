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

    queryFn: () =>
      fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`).then(
        (res) => res.json()
      ),
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
          <div className="grid grid-cols-2">
            <img
              src={product.imgUrl}
              alt=""
              className="h-96 mx-auto object-contain"
            />

            <div>
              {/* TITULO */}
              <div className="flex justify-between mb-8">
                <div>
                  <p className=" text-stone-500">
                    {product.brand.toUpperCase()}
                  </p>
                  <p className="font-bold text-2xl">{product.model}</p>
                </div>
                <p className="text-2xl text-blue-500">
                  ${Number(product.price).toFixed(2)}
                </p>
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
                  value={product.ram.split("-")[0].trim()}
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
                  value={product.primaryCamera[0]}
                />
                <Property
                  icon={<Camera className="size-5 mr-2 font-bold" />}
                  name="Cámara secundaria"
                  value={product.secondaryCmera}
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
                  colors={product.options.colors}
                  idProduct={id}
                  storages={product.options.storages}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
