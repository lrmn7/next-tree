const listTheme = [
  {
    name: "Pastel",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684969483/prev1_zxoevl.png",
    colors: {
      title: "rgb(51, 51, 51)",
      bg: "rgb(255, 255, 255)",
      button: "rgb(209, 193, 215)",
      textButton: "rgb(52, 17, 65)",
    },
  },
  {
    name: "Light",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684969562/prev2_tpcfb8.png",
    colors: {
      title: "rgb(31, 41, 55)",
      bg: "rgb(255, 255, 255)",
      button: "rgb(87, 13, 248)",
      textButton: "rgb(255, 255, 255)",
    },
  },
  {
    name: "Cupcake",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684969675/prev3_rht2jw.png",
    colors: {
      title: "rgb(41, 19, 52)",
      bg: "rgb(250, 247, 245)",
      button: "rgb(101, 195, 200)",
      textButton: "rgb(0, 57, 60)",
    },
  },
  {
    name: "Night",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684969798/prev4_bjjvqh.png",
    colors: {
      title: "rgb(180, 198, 239)",
      bg: "rgb(15, 23, 42)",
      button: "rgb(56, 189, 248)",
      textButton: "rgb(0, 42, 61)",
    },
  },
  {
    name: "Coffee",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684969931/prev5_uahlkz.png",
    colors: {
      title: "rgb(117, 110, 99)",
      bg: "rgb(32, 22, 31)",
      button: "rgb(219, 146, 75)",
      textButton: "rgb(59, 29, 0)",
    },
  },
  {
    name: "Autumn",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1684970127/prev6_mzfhcm.png",
    colors: {
      title: "rgb(48, 48, 48)",
      bg: "rgb(241, 241, 241)",
      button: "rgb(140, 3, 39)",
      textButton: "rgb(255, 182, 201)",
    },
  },
  {
    name: "Luxury",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685003191/prev7_mumy5l.png",
    colors: {
      title: "rgb(220, 165, 76)",
      bg: "rgb(9, 9, 11)",
      button: "rgb(255, 255, 255)",
      textButton: "rgb(51, 51, 51)",
    },
  },
  {
    name: "Wireframe",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685003403/prev8_oylyaz.png",
    colors: {
      title: "rgb(51, 51, 51)",
      bg: "rgb(255, 255, 255)",
      button: "rgb(184, 184, 184)",
      textButton: "rgb(37, 37, 37)",
    },
  },
  {
    name: "Aqua",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685003706/prev9_oilykp.png",
    colors: {
      title: "rgb(197, 218, 255)",
      bg: "rgb(52, 93, 167)",
      button: "rgb(9, 236, 243)",
      textButton: "rgb(0, 83, 85)",
    },
  },
  {
    name: "Lofi",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685003781/prev10_iq3nkt.png",
    colors: {
      title: "rgb(0, 0, 0)",
      bg: "rgb(255, 255, 255)",
      button: "rgb(13, 13, 13)",
      textButton: "rgb(255, 255, 255)",
    },
  },
  {
    name: "Valentine",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685003924/prev11_fdtami.png",
    colors: {
      title: "rgb(99, 44, 59)",
      bg: "rgb(240, 214, 232)",
      button: "rgb(233, 109, 123)",
      textButton: "rgb(68, 0, 8)",
    },
  },
  {
    name: "Cyberpunk",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685004010/prev12_qiuxz3.png",
    colors: {
      title: "rgb(51, 48, 0)",
      bg: "rgb(255, 238, 0)",
      button: "rgb(255, 117, 152)",
      textButton: "rgb(74, 0, 19)",
    },
  },
  {
    name: "Synthwave",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685004094/prev13_xo9ler.png",
    colors: {
      title: "rgb(249, 247, 253)",
      bg: "rgb(45, 27, 105)",
      button: "rgb(231, 121, 193)",
      textButton: "rgb(70, 0, 46)",
    },
  },
  {
    name: "Dark",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685004212/prev14_rzlfcg.png",
    colors: {
      title: "rgb(166, 173, 187)",
      bg: "rgb(42, 48, 60)",
      button: "rgb(102, 26, 230)",
      textButton: "rgb(255, 255, 255)",
    },
  },
  {
    name: "Corporate",
    img: "https://res.cloudinary.com/lrmn/image/upload/v1685004292/prev15_gzactf.png",
    colors: {
      title: "rgb(24, 26, 42)",
      bg: "rgb(255, 255, 255)",
      button: "rgb(75, 107, 251)",
      textButton: "rgb(218, 225, 255)",
    },
  },
];

const listBackground = [
  {
    id: "flat",
    name: "Flat Color",
    className: "bg-primary",
    childClassName: null,
  },
  {
    id: "gradient",
    name: "Gradient",
    className: "bg-gradient-to-t from-primary to-secondary",
    childClassName: null,
  },
  {
    id: "image",
    name: "Image",
    className: "bg-image bg-gray-100",
    childClassName:
      "bg-[url('https://res.cloudinary.com/lrmn/image/upload/v1685004360/Vector_sk88_omrocy.png')]",
  },
];

export { listTheme, listBackground };
