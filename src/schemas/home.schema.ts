interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714573514/photo1714147772_y0bxwu.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714573551/photo1714573478_wxajw8.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714573789/los-10-sonidos-principales-del-perro_abu980.jpg",
    description: "Todo lo que un perro tenga te lo dará con creces.",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714573515/photo1714145379_tqcilq.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
