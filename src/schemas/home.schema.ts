interface IHomeSchemas {
  img: string;
  description: string;
  author: string;
}

export const OF_THE_WEEK: Pick<IHomeSchemas, "img">[] = [
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1711845402/photo1711844977_ft43kd.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1711843450/photo1708707437_opzgr1.jpg",
  },
];

export const ANIMAL_WEEK: IHomeSchemas[] = [
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpL2rQOaoP6NpWncb3QaGj20JU5BXlLRRs71TbKvRkNkiFwq47Um9ixQvbizBRORVcW3_dd_ZeyB9FIHb-FKJV9RYOVtBlwCIfcGt6HeO9pplv5Z_FDFp6sLEt8SBNkhxWRKhID3R0Pzk/w1200-h630-p-k-no-nu/b.jpg",
    description: "En todas las cosas de la naturaleza hay algo maravilloso",
    author: "-Aristóteles",
  },
  {
    img: "https://res.cloudinary.com/dbgww54tl/image/upload/v1712199786/photo1708479607_2_h12iot.jpg",
    description:
      '"los maestros tiene cuidado de no hacer de estos paseos por la naturaleza una oportunidad para la instrucción científica, ya que deseamos que la atención de los niños se preste a la observación con muy poca dirección".',
    author: "Charlotte Mason, Vol 3 ",
  },
];
