interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1718653549/WhatsApp_Image_2024-06-17_at_14.40.09_850b1a94_m3mdgu.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1718653550/WhatsApp_Image_2024-06-17_at_14.39.03_cfe79a6f_jjwy5b.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1718653551/WhatsApp_Image_2024-06-17_at_14.36.34_9e5c7876_vpsgfz.jpg",
    description: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1718653550/WhatsApp_Image_2024-06-17_at_14.39.01_969cf01c_wmgijj.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
