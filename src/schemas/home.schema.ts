interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1752540305/Imagen_de_WhatsApp_2025-06-17_a_las_18.30.30_a2349451_odnp2d.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1752540308/Frases_para_Diarios_s9ca9n.png",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1752548455/T%C3%A9rmino_de_Atmo_xtlc9r.png",
    description: "«El tiempo atmosférico»",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1752540307/Imagen_de_WhatsApp_2025-06-08_a_las_18.36.49_c239033e_dl5hbb.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
