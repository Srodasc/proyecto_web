const imagenes = [
    {
      name: "imagen1",
      ruta: "../img/img1.png",
    },
    {
      name: "imagen2",
      ruta: "../img/img2.png",
    },
    {
      name: "imagen3",
      ruta: "../img/img3.png",
    },
    {
      name: "imagen4",
      ruta: "../img/img4.png",
    },
    {
      name: "imagen5",
      ruta: "../img/img5.png",
    },
    {
      name: "imagen6",
      ruta: "../img/img6.png",
    },
    {
      name: "imagen7",
      ruta: "../img/img7.png",
    },
    {
      name: "imagen8",
      ruta: "../img/img8.png",
    },
    {
      name: "imagen9",
      ruta: "../img/img9.png",
    },
    {
      name: "imagen10",
      ruta: "../img/img10.png",
    },
  ];


  const Data= [
    {
        Nombre: "Oficina en Pance 1",
        Categoria: "Oficina",
        Imagen: "../img/img1.png",
        CodigoVivienda: "6aJ9rLLF",
        Direccion: "Calle 33 #83-100",
        Barrio: "Pance",
        Estrato: 3,
        Precio: 395000000
    },
    {
        Nombre: "Consultorio en Menga 2",
        Categoria: "Consultorio",
        Imagen: "../img/img3.png",
        CodigoVivienda: "9uN10K4C",
        Direccion: "Calle 67 #79-58",
        Barrio: "Menga",
        Estrato: 3,
        Precio: 300000000
    },
    {
        Nombre: "Bodega en Alfonso López 3",
        Categoria: "Bodega",
        Imagen: "../img/img9.png",
        CodigoVivienda: "c436V84d",
        Direccion: "Calle 43 #65-45",
        Barrio: "Alfonso López",
        Estrato: 5,
        Precio: 661000000
    },
    {
        Nombre: "Apartamento en Villacolombia 4",
        Categoria: "Apartamento",
        Imagen: "../img/img6.png",
        CodigoVivienda: "4D1jJRYE",
        Direccion: "Calle 89 #23-32",
        Barrio: "Villacolombia",
        Estrato: 4,
        Precio: 502000000
    },
    {
        Nombre: "Oficina en Manuela Beltrán 5",
        Categoria: "Oficina",
        Imagen: "../img/img5.png",
        CodigoVivienda: "58x1G0Y3",
        Direccion: "Calle 91 #40-56",
        Barrio: "Manuela Beltrán",
        Estrato: 1,
        Precio: 204000000
    },
    {
        Nombre: "Casa en San Bosco 6",
        Categoria: "Casa",
        Imagen: "../img/img7.png",
        CodigoVivienda: "lw89L517",
        Direccion: "Calle 93 #4-51",
        Barrio: "San Bosco",
        Estrato: 4,
        Precio: 402000000
    },
    {
        Nombre: "Apartamento en Manuela Beltrán 7",
        Categoria: "Apartamento",
        Imagen: "../img/img1.png",
        CodigoVivienda: "30T52hH6",
        Direccion: "Calle 5 #24-1",
        Barrio: "Manuela Beltrán",
        Estrato: 4,
        Precio: 558000000
    },
    {
        Nombre: "Edificio en El Peñón 8",
        Categoria: "Edificio",
        Imagen: "../img/img7.png",
        CodigoVivienda: "2H00e2Y9",
        Direccion: "Calle 45 #64-58",
        Barrio: "El Peñón",
        Estrato: 5,
        Precio: 605000000
    },
    {
        Nombre: "Bodega en San Antonio 9",
        Categoria: "Bodega",
        Imagen: "../img/img10.png",
        CodigoVivienda: "5K4Q9Q7q",
        Direccion: "Calle 99 #28-64",
        Barrio: "San Antonio",
        Estrato: 6,
        Precio: 668000000
    },
    {
        Nombre: "Local Comercial en San Bosco 10",
        Categoria: "Local Comercial",
        Imagen: "../img/img4.png",
        CodigoVivienda: "OprY0uCP8",
        Direccion: "Calle 8 #49-40",
        Barrio: "San Bosco",
        Estrato: 2,
        Precio: 310000000
    },
    {
        Nombre: "Lote en La Merced 11",
        Categoria: "Lote",
        Imagen: "../img/img8.png",
        CodigoVivienda: "K4o3c9oe",
        Direccion: "Calle 21 #32-52",
        Barrio: "La Merced",
        Estrato: 3,
        Precio: 477000000
    },
    {
        Nombre: "Bodega en Menga 12",
        Categoria: "Bodega",
        Imagen: "../img/img9.png",
        CodigoVivienda: "663b91A6",
        Direccion: "Calle 25 #81-92",
        Barrio: "Menga",
        Estrato: 1,
        Precio: 293000000
    },
    {
        Nombre: "Oficina en Pance 13",
        Categoria: "Oficina",
        Imagen: "../img/img1.png",
        CodigoVivienda: "E2xqQ268",
        Direccion: "Calle 71 #3-20",
        Barrio: "Pance",
        Estrato: 6,
        Precio: 692000000
    },
    {
        Nombre: "Consultorio en Villacolombia 14",
        Categoria: "Consultorio",
        Imagen: "../img/img1.png",
        CodigoVivienda: "n4i044zO",
        Direccion: "Calle 41 #46-17",
        Barrio: "Villacolombia",
        Estrato: 4,
        Precio: 421000000
    },
    {
        Nombre: "Local Comercial en Petecuy 15",
        Categoria: "Local Comercial",
        Imagen: "../img/img1.png",
        CodigoVivienda: "7597p2a6M",
        Direccion: "Calle 58 #42-93",
        Barrio: "Petecuy",
        Estrato: 5,
        Precio: 606000000
    },
    {
        Nombre: "Lote en San Fernando 16",
        Categoria: "Lote",
        Imagen: "../img/img8.png",
        CodigoVivienda: "IGE395Bl",
        Direccion: "Calle 51 #4-37",
        Barrio: "San Fernando",
        Estrato: 6,
        Precio: 731000000
    },
    {
        Nombre: "Penthouse en Siloe 17",
        Categoria: "Penthouse",
        Imagen: "../img/img5.png",
        CodigoVivienda: "75M08hT4",
        Direccion: "Calle 54 #75-13",
        Barrio: "Siloe",
        Estrato: 6,
        Precio: 749000000
    },
    {
        Nombre: "Oficina en Pance 18",
        Categoria: "Oficina",
        Imagen: "../img/img8.png",
        CodigoVivienda: "8thUA6i2",
        Direccion: "Calle 55 #26-45",
        Barrio: "Pance",
        Estrato: 2,
        Precio: 251000000
    },
    {
        Nombre: "Finca en Unidad Deportiva 19",
        Categoria: "Finca",
        Imagen: "../img/img4.png",
        CodigoVivienda: "523895E9Cr",
        Direccion: "Calle 84 #60-40",
        Barrio: "Unidad Deportiva",
        Estrato: 5,
        Precio: 567000000
    },
    {
        Nombre: "Apartamento en Unidad Deportiva 20",
        Categoria: "Apartamento",
        Imagen: "../img/img4.png",
        CodigoVivienda: "auB6K7bl",
        Direccion: "Calle 34 #7-3",
        Barrio: "Unidad Deportiva",
        Estrato: 2,
        Precio: 218000000
    },
    {
        Nombre: "Bodega en San Bosco 21",
        Categoria: "Bodega",
        Imagen: "../img/img7.png",
        CodigoVivienda: "1jiEmq1u",
        Direccion: "Calle 8 #92-3",
        Barrio: "San Bosco",
        Estrato: 2,
        Precio: 248000000
    },
    {
        Nombre: "Apartamento en Menga 22",
        Categoria: "Apartamento",
        Imagen: "../img/img5.png",
        CodigoVivienda: "e1vImFq0",
        Direccion: "Calle 17 #34-78",
        Barrio: "Menga",
        Estrato: 1,
        Precio: 143000000
    },
    {
        Nombre: "Edificio en Aguablanca 23",
        Categoria: "Edificio",
        Imagen: "../img/img2.png",
        CodigoVivienda: "8pK1U83k",
        Direccion: "Calle 15 #40-37",
        Barrio: "Aguablanca",
        Estrato: 3,
        Precio: 434000000
    },
    {
        Nombre: "Lote en Ciudad Jardín 24",
        Categoria: "Lote",
        Imagen: "../img/img10.png",
        CodigoVivienda: "04b4zfd7D",
        Direccion: "Calle 19 #55-35",
        Barrio: "Ciudad Jardín",
        Estrato: 5,
        Precio: 697000000
    },
    {
        Nombre: "Finca en El Peñón 25",
        Categoria: "Finca",
        Imagen: "../img/img10.png",
        CodigoVivienda: "56g619Sz",
        Direccion: "Calle 59 #84-67",
        Barrio: "El Peñón",
        Estrato: 1,
        Precio: 119000000
    },
    {
        Nombre: "Apartamento en Granada 26",
        Categoria: "Apartamento",
        Imagen: "../img/img9.png",
        CodigoVivienda: "2847VfWP",
        Direccion: "Calle 78 #86-72",
        Barrio: "Granada",
        Estrato: 2,
        Precio: 310000000
    },
    {
        Nombre: "Apartamento en Manuela Beltrán 27",
        Categoria: "Apartamento",
        Imagen: "../img/img2.png",
        CodigoVivienda: "4X8BWl5M",
        Direccion: "Calle 55 #19-7",
        Barrio: "Manuela Beltrán",
        Estrato: 3,
        Precio: 409000000
    },
    {
        Nombre: "Edificio en Manuela Beltrán 28",
        Categoria: "Edificio",
        Imagen: "../img/img9.png",
        CodigoVivienda: "1E50x100",
        Direccion: "Calle 54 #59-98",
        Barrio: "Manuela Beltrán",
        Estrato: 1,
        Precio: 260000000
    },
    {
        Nombre: "Apartamento en Versalles 29",
        Categoria: "Apartamento",
        Imagen: "../img/img6.png",
        CodigoVivienda: "I6h3J4r9",
        Direccion: "Calle 34 #4-40",
        Barrio: "Versalles",
        Estrato: 1,
        Precio: 190000000
    },
    {
        Nombre: "Finca en El Centro 30",
        Categoria: "Finca",
        Imagen: "../img/img10.png",
        CodigoVivienda: "P31K7064u",
        Direccion: "Calle 10 #35-64",
        Barrio: "El Centro",
        Estrato: 2,
        Precio: 354000000
    },
    {
        Nombre: "Finca en Pance 31",
        Categoria: "Finca",
        Imagen: "../img/img7.png",
        CodigoVivienda: "X45h6YEY",
        Direccion: "Calle 34 #91-10",
        Barrio: "Pance",
        Estrato: 4,
        Precio: 416000000
    },
    {
        Nombre: "Oficina en San Antonio 32",
        Categoria: "Oficina",
        Imagen: "../img/img6.png",
        CodigoVivienda: "m8Zacu1x",
        Direccion: "Calle 48 #14-24",
        Barrio: "San Antonio",
        Estrato: 2,
        Precio: 367000000
    },
    {
        Nombre: "Edificio en Versalles 33",
        Categoria: "Edificio",
        Imagen: "../img/img9.png",
        CodigoVivienda: "K3Ic69p1",
        Direccion: "Calle 52 #16-97",
        Barrio: "Versalles",
        Estrato: 4,
        Precio: 591000000
    },
    {
        Nombre: "Penthouse en Menga 34",
        Categoria: "Penthouse",
        Imagen: "../img/img10.png",
        CodigoVivienda: "rn6S70cl",
        Direccion: "Calle 77 #35-61",
        Barrio: "Menga",
        Estrato: 4,
        Precio: 593000000
    },
    {
        Nombre: "Penthouse en Siloe 35",
        Categoria: "Penthouse",
        Imagen: "../img/img8.png",
        CodigoVivienda: "849EuYE0",
        Direccion: "Calle 42 #22-66",
        Barrio: "Siloe",
        Estrato: 5,
        Precio: 698000000
    },
    {
        Nombre: "Apartamento en Pance 36",
        Categoria: "Apartamento",
        Imagen: "../img/img1.png",
        CodigoVivienda: "294l8447y7Z",
        Direccion: "Calle 32 #52-62",
        Barrio: "Pance",
        Estrato: 5,
        Precio: 601000000
    },
    {
        Nombre: "Local Comercial en San Antonio 37",
        Categoria: "Local Comercial",
        Imagen: "../img/img10.png",
        CodigoVivienda: "07bk160855D",
        Direccion: "Calle 69 #71-19",
        Barrio: "San Antonio",
        Estrato: 4,
        Precio: 593000000
    },
    {
        Nombre: "Edificio en Unidad Deportiva 38",
        Categoria: "Edificio",
        Imagen: "../img/img3.png",
        CodigoVivienda: "3S2st0eC",
        Direccion: "Calle 36 #78-60",
        Barrio: "Unidad Deportiva",
        Estrato: 2,
        Precio: 317000000
    },
    {
        Nombre: "Edificio en Villacolombia 39",
        Categoria: "Edificio",
        Imagen: "../img/img6.png",
        CodigoVivienda: "9V7C15572321w",
        Direccion: "Calle 55 #34-1",
        Barrio: "Villacolombia",
        Estrato: 1,
        Precio: 106000000
    },
    {
        Nombre: "Consultorio en Granada 40",
        Categoria: "Consultorio",
        Imagen: "../img/img3.png",
        CodigoVivienda: "5fq983O9",
        Direccion: "Calle 70 #89-4",
        Barrio: "Granada",
        Estrato: 4,
        Precio: 462000000
    },
    {
        Nombre: "Local Comercial en Ciudad Jardín 41",
        Categoria: "Local Comercial",
        Imagen: "../img/img8.png",
        CodigoVivienda: "fT6Yx6B9",
        Direccion: "Calle 45 #48-50",
        Barrio: "Ciudad Jardín",
        Estrato: 2,
        Precio: 294000000
    },
    {
        Nombre: "Edificio en Santa Teresita 42",
        Categoria: "Edificio",
        Imagen: "../img/img1.png",
        CodigoVivienda: "p9yFNH2t",
        Direccion: "Calle 70 #10-54",
        Barrio: "Santa Teresita",
        Estrato: 2,
        Precio: 280000000
    },
    {
        Nombre: "Finca en Pance 43",
        Categoria: "Finca",
        Imagen: "../img/img3.png",
        CodigoVivienda: "k097Z341",
        Direccion: "Calle 23 #12-30",
        Barrio: "Pance",
        Estrato: 6,
        Precio: 747000000
    },
    {
        Nombre: "Oficina en Santa Teresita 44",
        Categoria: "Oficina",
        Imagen: "../img/img3.png",
        CodigoVivienda: "p5dC9n1N",
        Direccion: "Calle 80 #15-59",
        Barrio: "Santa Teresita",
        Estrato: 5,
        Precio: 698000000
    },
    {
        Nombre: "Apartamento en El Centro 45",
        Categoria: "Apartamento",
        Imagen: "../img/img5.png",
        CodigoVivienda: "5q9m7x63T",
        Direccion: "Calle 45 #69-31",
        Barrio: "El Centro",
        Estrato: 5,
        Precio: 543000000
    },
    {
        Nombre: "Oficina en San Antonio 46",
        Categoria: "Oficina",
        Imagen: "../img/img7.png",
        CodigoVivienda: "5u62w7nmp7W",
        Direccion: "Calle 65 #38-94",
        Barrio: "San Antonio",
        Estrato: 3,
        Precio: 394000000
    },
    {
        Nombre: "Lote en San Bosco 47",
        Categoria: "Lote",
        Imagen: "../img/img10.png",
        CodigoVivienda: "5L4V42M1V3JUs",
        Direccion: "Calle 64 #29-25",
        Barrio: "San Bosco",
        Estrato: 5,
        Precio: 615000000
    },
    {
        Nombre: "Oficina en Pance 48",
        Categoria: "Oficina",
        Imagen: "../img/img10.png",
        CodigoVivienda: "9s428KF4",
        Direccion: "Calle 7 #67-87",
        Barrio: "Pance",
        Estrato: 4,
        Precio: 574000000
    },
    {
        Nombre: "Edificio en Santa Teresita 49",
        Categoria: "Edificio",
        Imagen: "../img/img1.png",
        CodigoVivienda: "6162ws57I",
        Direccion: "Calle 96 #85-71",
        Barrio: "Santa Teresita",
        Estrato: 6,
        Precio: 749000000
    },
    {
        Nombre: "Lote en Siloe 50",
        Categoria: "Lote",
        Imagen: "../img/img9.png",
        CodigoVivienda: "WH52wUWS",
        Direccion: "Calle 61 #20-59",
        Barrio: "Siloe",
        Estrato: 1,
        Precio: 243000000
    }
]