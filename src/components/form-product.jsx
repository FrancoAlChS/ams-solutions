/* eslint-disable react/prop-types */
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
import { z } from "zod";

const formSchema = z.object({
  color: z.number({ invalid_type_error: "Se tiene que seleccionar un color" }),
  storage: z.number({
    invalid_type_error:
      "Se tiene que seleccionar la cantidad de almacenamiento",
  }),
});

export function FormProduct({ colors, storages, idProduct }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: null,
      storage: null,
    },
  });

  function onSubmit(values) {
    fetch("https://itx-frontend-test.onrender.com/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idProduct,
        colorCode: values.color,
        storageCode: values.storage,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("shopping", res.count));
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
                  defaultValue={field.value}
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
                  defaultValue={field.value}
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
        <Button type="submit">Agregar</Button>
      </form>
    </Form>
  );
}
