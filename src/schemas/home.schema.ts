interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1723503273/WhatsApp_Image_2024-08-02_at_10.03.05_AM_ltp7fb.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1723503273/WhatsApp_Image_2024-08-01_at_4.25.36_PM_iczkp4.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1723503271/Reverencia_b6vdjm.jpg",
    description:
      "La Middlemist Camellia, o Camellia japonica Middlemist's Red, es una de las flores más raras del mundo. Esta especie particular de camelia es conocida por su color rosa intenso y su belleza elegante.",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1723503272/WhatsApp_Image_2024-07-26_at_10.09.39_AM_jpkdk5.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
