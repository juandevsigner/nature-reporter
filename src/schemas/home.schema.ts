interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728388511/Imagen_de_WhatsApp_2024-10-04_a_las_13.45.21_5a361f5a_fq5yyk.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728388542/photo_4904749014927387963_y_bbwlg2.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728389068/Imagen_de_WhatsApp_2024-10-08_a_las_07.04.08_cdabaea4_wn4ohf.jpg",
    description:
      "«El secreto no es correr detrás de las mariposas…es cuidar el jardín para que ellas vengan hacia tí»",
    author: "Mário de Miranda Quintana",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1728388543/photo_5186404629372579285_y_m5oykh.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
