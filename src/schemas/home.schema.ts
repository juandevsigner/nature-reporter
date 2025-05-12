interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1747065870/Imagen_de_WhatsApp_2025-05-09_a_las_12.08.21_5df74413_vs8ilk.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1747065872/Imagen_de_WhatsApp_2025-05-09_a_las_10.42.10_e17ec351_pbpz39.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1747065877/Imagen_de_WhatsApp_2025-05-08_a_las_15.36.41_de3ca958_teyctl.jpg",
    description: "«El Maravilloso mundo de los Nidos»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1747065874/Imagen_de_WhatsApp_2025-05-08_a_las_20.32.38_e8bcd263_fgfykg.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
