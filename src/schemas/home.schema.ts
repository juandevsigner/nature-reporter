interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1743338050/Imagen_de_WhatsApp_2025-03-28_a_las_07.31.29_d089fae5_vzghxl.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1745497034/Imagen_de_WhatsApp_2025-04-05_a_las_07.08.14_fb3e4ad6_ivigii.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1745497033/Imagen_de_WhatsApp_2025-04-07_a_las_07.09.43_b50929cc_gzuucl.jpg",
    description: "«El Maravilloso mundo de los Nidos»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1745497033/Imagen_de_WhatsApp_2025-04-16_a_las_05.18.20_0e5a7d49_erlyc8.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
