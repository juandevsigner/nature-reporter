interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714839211/photo1714773032_3_wihbqm.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714839471/WhatsApp_Image_2024-05-02_at_21.32.58_743c024a_mp8mnc.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714573789/los-10-sonidos-principales-del-perro_abu980.jpg",
    description: "Todo lo que un perro tenga te lo dará con creces.",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1714839262/photo1714699870_1_i5yobq.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
