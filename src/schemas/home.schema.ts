interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1721169293/WhatsApp_Image_2024-07-16_at_17.20.06_5db01a6d_i9bj4q.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1721169293/WhatsApp_Image_2024-07-16_at_17.20.07_7c49f70e_zrlbsd.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1721168949/Reverencia_kzu7ui.png",
    description:
      "La Dendrophylax lindenii, La orquídea fantasma es una planta epífita, lo que significa que crece sobre otras plantas, en este caso generalmente árboles, pero no es parasitaria. Tiene raíces planas y verdes que se adhieren a la corteza del árbol huésped. Una característica sorprendente de esta orquídea es que no tiene hojas.",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1721169276/WhatsApp_Image_2024-07-16_at_17.27.32_f1ff4b1c_dodcy1.jpg",
    description:
      '""El sentido de la belleza proviene del contacto temprano con la naturaleza".',
    author: "Charlotte Mason, Vol 1 ",
  },
];
