import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useShoppingContext } from "../context/useShopping";
import { addProductFetch } from "../domain/add-product-fetch";

const formSchema = z.object({
  color: z.number({ invalid_type_error: "Se tiene que seleccionar un color" }),
  storage: z.number({
    invalid_type_error:
      "Se tiene que seleccionar la cantidad de almacenamiento",
  }),
});

export function FormProduct({ colors, storages, idProduct }) {
  const { addProduct } = useShoppingContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: null,
      storage: null,
    },
  });

  async function onSubmit(values) {
    try {
      await addProductFetch({
        id: idProduct,
        colorCode: values.color,
        storageCode: values.storage,
      });
      form.reset();
      addProduct();
      toast("Se agrego correctamente el producto");
    } catch {
      toast.error("No se pudo agregar el producto");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="color"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-lg">Seleccionar color</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  {colors.map((color) => (
                    <FormItem
                      key={color.code}
                      className="flex items-center gap-1 space-y-0"
                    >
                      <RadioGroupItem value={color.code} />
                      <FormLabel className="font-normal">
                        {color.name}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              {fieldState.error ? (
                <FormMessage />
              ) : (
                <p className="text-transparent select-none text-sm">error</p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storage"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Seleccionar almacenamiento
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  {storages.map((storage) => (
                    <FormItem
                      key={storage.code}
                      className="flex items-center gap-1 space-y-0"
                    >
                      <RadioGroupItem value={storage.code} />
                      <FormLabel className="font-normal">
                        {storage.name}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              {fieldState.error ? (
                <FormMessage />
              ) : (
                <p className="text-transparent select-none text-sm">error</p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Agregar
        </Button>
      </form>
    </Form>
  );
}
