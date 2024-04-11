interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1712801319/photo1712354785_mhuf83.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1712801319/photo1712801057_i2hj2h.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1712801480/como-criar-patos_csenrr.jpg",
    description: "La naturaleza no es un lugar para visitar,es nuestro hogar",
    author: "-Gary Snyder",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1712199786/photo1711122960_xuqqpn.jpg",
    description:
      '"los maestros tiene cuidado de no hacer de estos paseos por la naturaleza una oportunidad para la instrucción científica, ya que deseamos que la atención de los niños se preste a la observación con muy poca dirección".',
    author: "Charlotte Mason, Vol 3 ",
  },
];
