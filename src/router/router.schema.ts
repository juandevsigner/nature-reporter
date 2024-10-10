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
  dropDown?: boolean;
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
    dropDown: true,
  },
  {
    path: "/diarios-de-la-naturaleza/granjas",
    component: TermNaturePage,
    title: "Animales de la Granja",
    subMenu: true,
  },
  {
    path: "/diarios-de-la-naturaleza/flores",
    component: TermNaturePage,
    title: "Flores",
    subMenu: true,
  },
  {
    path: "/diarios-de-la-naturaleza/mariposas",
    component: TermNaturePage,
    title: "Mariposas",
    subMenu: true,
  },
  {
    path: "/mama-ilustra",
    component: TermNaturePage,
    title: "Mamá Ilustra",
  },
  {
    path: "/exploraciones",
    component: TermNaturePage,
    title: "Exploraciones",
  },
];
