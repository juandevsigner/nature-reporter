interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1732713221/Imagen_de_WhatsApp_2024-11-19_a_las_11.18.53_36ee64ab_iraejw.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1732713212/Imagen_de_WhatsApp_2024-11-20_a_las_15.54.36_ed68ab82_mojo9y.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1732713212/P%C3%B3ster_frases_bonitas_mariposas_aesthetic_azul_hberqs.png",
    description: "«Inspiración maternal»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1732713220/Imagen_de_WhatsApp_2024-11-18_a_las_12.27.12_18c291b9_vippbb.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
