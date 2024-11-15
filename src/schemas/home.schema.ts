interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1731670514/Imagen_de_WhatsApp_2024-10-24_a_las_13.17.26_0d382fba_zjuujv.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1731670512/Imagen_de_WhatsApp_2024-10-25_a_las_12.47.11_d6fdea7b_cio6op.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1731671406/Historia_de_frases_n6bbxb.png",
    description: "«Disfruta del proceso»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1731670528/Imagen_de_WhatsApp_2024-10-28_a_las_12.29.40_f903a845_oeayhe.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
