import { DailyNaturePage, HomePage, ReporterNaturePage } from "../pages";

interface IRouter {
  path: string;
  component: React.FC;
  title: string;
}

export const ROUTER_SCHEMA: IRouter[] = [
  {
    path: "/",
    component: HomePage,
    title: "Inicio",
  },
  {
    path: "/reporteros-de-la-naturaleza",
    component: ReporterNaturePage,
    title: "Reporteros",
  },
  {
    path: "/diarios-de-la-naturaleza",
    component: DailyNaturePage,
    title: "Diarios",
  },
];
