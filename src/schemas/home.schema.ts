interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714045860/WhatsApp_Image_2024-04-25_at_06.45.22_583923b9_zo1ras.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714046685/WhatsApp_Image_2024-04-25_at_07.04.31_d3d09b5f_jhoyvc.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714045873/WhatsApp_Image_2024-04-25_at_06.49.02_5cedf10c_ice02t.jpg",
    description: "HAY QUE TOMAR AL TORO POR LOS CUERNOS.",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714045859/photo1713492525_1_piglvt.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
