import {
  DailyNaturePage,
  HomePage,
  ReporterNaturePage,
  TermNaturePage,
} from "../pages";

interface IRouter {
  path: string;
  component: React.FC;
  title: string;
  subMenu?: boolean;
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
  {
    path: "/diarios-de-la-naturaleza/granjas",
    component: TermNaturePage,
    title: "Granjas",
    subMenu: true,
  },
];
