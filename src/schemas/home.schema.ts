interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1743337555/Imagen_de_WhatsApp_2025-03-14_a_las_00.36.06_904e7f54_wrl7np.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1743337554/Imagen_de_WhatsApp_2025-03-14_a_las_17.12.27_5fbbeb30_olaqg3.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1743338051/Imagen_de_WhatsApp_2025-03-27_a_las_06.38.59_f9723bc9_kynqxw.jpg",
    description: "«El Maravilloso mundo de los Nidos»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1743338056/Imagen_de_WhatsApp_2025-03-23_a_las_13.46.59_16975b96_sns18u.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
