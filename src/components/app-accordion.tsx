import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "./ui/switch";

export function AppAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="container flex justify-between px-4">
            <h2 className="text-lg font-semibold">Categoria 1</h2>

            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-500">Inativo</span>
              <Switch />
              <span className="text-gray-500">Ativo</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
