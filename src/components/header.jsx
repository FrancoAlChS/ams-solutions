import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../context/useShopping";

export function Header({ breadcrumbs }) {
  const { count } = useShoppingContext();
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col ">
          <Link to="/">
            <h1 className="text-2xl font-bold">Store Movil</h1>
          </Link>
          {breadcrumbs}
        </div>

        {/* Boton carrito de compras */}
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="relative cursor-default hover:bg-inherit"
          >
            <ShoppingCart className="h-4 w-4" />
            <Badge className="absolute -top-1/3 -right-1/3 text-xs py-1 px-2 border-none">
              {count}
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}
