import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

export function SelectComport({
  open,
  setOpen,
  value,
  setValue,
  arrValues,
  especif,
  setEspecific,
  text,
  findText,
  close,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  value: string;
  setValue: (val: string) => void;
  arrValues: any[];
  especif: any;
  setEspecific: (val: any) => void;
  text: string;
  findText: string;
  close?: (val: boolean) => void;
}) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full   truncate justify-between"
        >
          {value
            ? arrValues.find((framework) => framework.name === value)?.name
            : text}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="">
          <CommandInput placeholder={findText} />
          <CommandList>
            <CommandEmpty>Nenhum cliente encontrado</CommandEmpty>
            <CommandGroup>
              <CommandItem
                className="w-full"
                value={""}
                onSelect={(currentValue: any) => {
                  setOpen(false);
                  close ? close(false) : "";
                  setEspecific("");

                  setValue("");
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === "" ? "opacity-100" : "opacity-0"
                  )}
                />
                none
              </CommandItem>
              {arrValues.map((framework) => (
                <CommandItem
                  className="w-full"
                  key={framework.value}
                  value={framework.name}
                  onSelect={(currentValue: any) => {
                    console.log(currentValue);
                    const selectSubReg = arrValues.find(
                      (cli) => cli.name == currentValue
                    );
                    setOpen(false);
                    close ? close(false) : "";
                    console.log(selectSubReg);
                    setEspecific(selectSubReg as any);

                    setValue(currentValue === value ? "" : currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
