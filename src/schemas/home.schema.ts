interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1726144740/WhatsApp_Image_2024-09-12_at_07.31.21_52e088a7_hlcesa.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1726145271/un-mundo-de-mariposas-mariposa-monarca_lrqcea.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1726144741/WhatsApp_Image_2024-09-12_at_07.32.22_85109450_mtbqao.jpg",
    description:
      "«El secreto no es correr detrás de las mariposas…es cuidar el jardín para que ellas vengan hacia tí»",
    author: "Mário de Miranda Quintana",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1726144741/WhatsApp_Image_2024-09-12_at_07.31.00_ae1fe224_cqwcjm.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
