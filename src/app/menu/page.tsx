import { AppAccordion } from "@/components/app-accordion";

export default function Menu() {
  return (
    // Container
    <div className="container p-8 lg:flex flex-col gap-8 ">
      {/* Heading */}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Cardápio
          </h1>

          <p className="text-gray-500">
            O cardápio é a sua vitrine de produtos. Aqui você define quais itens
            os seus clientes vão poder pedir e receber em casa.
          </p>
        </div>
      </div>

      <AppAccordion />
    </div>
  );
}
