import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Alert>
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Error 404</AlertTitle>
          <AlertDescription>
            La página solicitada no existe.{" "}
            <Link to="/productos" className="text-blue-500 font-semibold">
              Volver al inicio
            </Link>
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
}
