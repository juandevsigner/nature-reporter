interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1717032081/WhatsApp_Image_2024-05-29_at_20.15.12_8bcb5c35_nlpkjg.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/a_-90/v1717032081/WhatsApp_Image_2024-05-29_at_20.15.03_4957266f_ajdvtp.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1717032082/WhatsApp_Image_2024-05-29_at_20.15.01_5cf9b18b_wbclak.jpg",
    description: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1717032132/WhatsApp_Image_2024-05-29_at_20.21.36_2285c12f_ubhz1h.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
