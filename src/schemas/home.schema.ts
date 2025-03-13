interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1741898727/Imagen_de_WhatsApp_2025-02-21_a_las_05.33.16_a0f058d2_k8hflt.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1741898714/Imagen_de_WhatsApp_2025-03-12_a_las_18.03.20_8bcce2a9_ndvtv7.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1741898715/Frases_para_Diarios_onziuj.png",
    description: "«El Maravilloso mundo de los Nidos»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1741898727/Imagen_de_WhatsApp_2025-02-24_a_las_16.43.06_b3898496_zm6ums.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
