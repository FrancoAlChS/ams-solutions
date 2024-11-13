/* eslint-disable react/prop-types */
import { Separator } from "@/components/ui/Separator";

export function Property({ icon, name, value }) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span className="flex items-center ">
          {icon} {name}
        </span>
        <span>{value}</span>
      </p>
      <Separator />
    </>
  );
}
