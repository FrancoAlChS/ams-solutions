/* eslint-disable react/prop-types */
import { Separator } from "@/components/ui/Separator";

export function Property({ icon, name, value }) {
  return (
    <>
      <p className="flex justify-between text-sm flex-col gap-2 md:flex-row sm:gap-0">
        <span className="flex items-center ">
          {icon} {name}
        </span>
        <span>{value}</span>
      </p>
      <Separator />
    </>
  );
}
