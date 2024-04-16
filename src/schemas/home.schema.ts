interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1713268496/WhatsApp_Image_2024-04-16_at_06.50.00_aa3b580d_p9xyx5.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1713268495/photo1712935184_3_b41fgp.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1713269130/descubre-la-cantidad-de-lana-que-produce-una-oveja_zd5edb.jpg",
    description:
      "Yo mismo seré el pastor de mis ovejas, yo mismo las llevaré a descansar. Yo, el Señor, lo afirmo. Buscaré a las ovejas perdidas, traeré a las extraviadas, vendaré a las que tengan alguna pata rota, ayudaré a las débiles, y cuidaré a las gordas y fuertes.",
    author: "-Ezequiel  34:16",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1713268493/photo1712931407_gectq1.jpg",
    description:
      '"los maestros tiene cuidado de no hacer de estos paseos por la naturaleza una oportunidad para la instrucción científica, ya que deseamos que la atención de los niños se preste a la observación con muy poca dirección".',
    author: "Charlotte Mason, Vol 3 ",
  },
];
