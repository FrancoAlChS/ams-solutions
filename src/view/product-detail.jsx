import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";

export function ProductDetail() {
  const { id } = useParams();
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
    </div>
  );
}
