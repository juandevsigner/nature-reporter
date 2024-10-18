interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1729255051/Imagen_de_WhatsApp_2024-10-16_a_las_13.26.05_8ca350c5_zuoc6z.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1729255051/Imagen_de_WhatsApp_2024-10-16_a_las_13.27.20_59552cf1_vgzorx.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1729255052/Imagen_de_WhatsApp_2024-10-08_a_las_07.14.14_5c5b0ac4_ol9wfc.jpg",
    description:
      "«El secreto no es correr detrás de las mariposas…es cuidar el jardín para que ellas vengan hacia tí»",
    author: "Mário de Miranda Quintana",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1729255052/photo_4934162784921431226_y_ii3noz.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
