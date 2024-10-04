interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728009559/Imagen_de_WhatsApp_2024-09-20_a_las_08.47.14_2346d521_vjsiyr.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728009554/Imagen_de_WhatsApp_2024-09-17_a_las_07.20.39_610eea26_htgss1.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728009571/Imagen_de_WhatsApp_2024-09-26_a_las_11.53.24_c1fd3143_rytare.jpg",
    description:
      "«El secreto no es correr detrás de las mariposas…es cuidar el jardín para que ellas vengan hacia tí»",
    author: "Mário de Miranda Quintana",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728009558/Imagen_de_WhatsApp_2024-09-19_a_las_11.51.44_05d91a39_uz2gm2.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
