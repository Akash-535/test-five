import {
  ApplePayIcon,
  CKIcon,
  DiscordIcon,
  FacebookIcon,
  FiveStarIcon,
  FourHalfStarIcon,
  FourStarIcon,
  GPayIcon,
  GucciIcon,
  InstaIcon,
  MasterCardIcon,
  PayPalIcon,
  PradaIcon,
  ThreeHalfStarIcon,
  ThreeStarIocn,
  VersaceIcon,
  VisaIcon,
  XIcon,
  ZaraIcon,
} from "./icons";

interface HeaderList {
  title: string;
  link: string;
}

interface ArrivalsList {
  image: string;
  title?: string;
  ratingStar?: any;
  ratingText?: string;
  price?: string;
  prevPrice?: string;
  discount?: string;
}

export const HEADER_LIST: HeaderList[] = [
  {
    title: "Shop",
    link: "#",
  },
  {
    title: "On Sale",
    link: "#",
  },
  {
    title: "New Arrivals",
    link: "#",
  },
  {
    title: "Brands",
    link: "#",
  },
];

export const COUNTER_LIST: string[] = [
  "International Brands",
  "High-Quality Products",
  "Happy Customers",
];

export const BRANDS_ICON_LIST = [
  {
    icon: <VersaceIcon />,
    link: "https://www.versace.com/",
  },
  {
    icon: <ZaraIcon />,
    link: "https://www.zara.com/",
  },
  {
    icon: <GucciIcon />,
    link: "https://www.gucci.com/",
  },
  {
    icon: <PradaIcon />,
    link: "https://www.prada.com/",
  },
  {
    icon: <CKIcon />,
    link: "https://www.calvinklein.us",
  },
];

export const NEW_ARRIVALS_LIST: ArrivalsList[] = [
  {
    image: "/assets/images/arrivals-img-one.webp",
    title: "T-SHIRT WITH TAPE DETAILS",
    ratingStar: <FourHalfStarIcon />,
    ratingText: "4.5/",
    price: "$120",
  },
  {
    image: "/assets/images/arrivals-img-two.webp",
    title: "SKINNY FIT JEANS",
    ratingStar: <ThreeHalfStarIcon />,
    ratingText: "3.5/",
    price: "$240",
    prevPrice: "$260",
    discount: "-20%",
  },
  {
    image: "/assets/images/arrivals-img-three.webp",
    title: "CHECKERED SHIRT",
    ratingStar: <FourHalfStarIcon />,
    ratingText: "4.5/",
    price: "$180",
  },
  {
    image: "/assets/images/arrivals-img-four.webp",
    title: "SLEEVE STRIPED T-SHIRT",
    ratingStar: <FourHalfStarIcon />,
    ratingText: "4.5/",
    price: "$130",
    prevPrice: "$160",
    discount: "-30%",
  },
  {
    image: "/assets/images/arrivals-img-two.webp",
    title: "SKINNY FIT JEANS",
    ratingStar: <ThreeHalfStarIcon />,
    ratingText: "3.5/",
    price: "$240",
    prevPrice: "$260",
    discount: "-20%",
  },
  {
    image: "/assets/images/arrivals-img-three.webp",
    title: "CHECKERED SHIRT",
    ratingStar: <FourHalfStarIcon />,
    ratingText: "4.5/",
    price: "$180",
  },
];

export const TOP_SELLING_LIST: ArrivalsList[] = [
  {
    image: "/assets/images/selling-img-one.webp",
    title: "VERTICAL STRIPED SHIRT",
    ratingStar: <FiveStarIcon />,
    ratingText: "5/",
    price: "$212",
    prevPrice: "$232",
    discount: "-20%",
  },
  {
    image: "/assets/images/selling-img-two.webp",
    title: "COURAGE GRAPHIC T-SHIRT",
    ratingStar: <FourStarIcon />,
    ratingText: "4/",
    price: "$145",
  },
  {
    image: "/assets/images/selling-img-three.webp",
    title: "LOOSE FIT BERMUDA SHORTS",
    ratingStar: <ThreeStarIocn />,
    ratingText: "3/",
    price: "$80",
  },
  {
    image: "/assets/images/selling-img-four.webp",
    title: "FADED SKINNY JEANS",
    ratingStar: <FourHalfStarIcon />,
    ratingText: "4.5/",
    price: "$210",
  },
  {
    image: "/assets/images/selling-img-two.webp",
    title: "COURAGE GRAPHIC T-SHIRT",
    ratingStar: <FourStarIcon />,
    ratingText: "4/",
    price: "$145",
  },
  {
    image: "/assets/images/selling-img-three.webp",
    title: "LOOSE FIT BERMUDA SHORTS",
    ratingStar: <ThreeStarIocn />,
    ratingText: "3/",
    price: "$80",
  },
];

export const HAPPY_CUSTOMERS_LIST = [
  {
    ratingStar: <FiveStarIcon />,
    name: "Sarah M.",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    ratingStar: <FiveStarIcon />,
    name: "Alex K.",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    ratingStar: <FiveStarIcon />,
    name: "James L.",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    ratingStar: <FiveStarIcon />,
    name: "Sarah M.",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    ratingStar: <FiveStarIcon />,
    name: "James L.",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    ratingStar: <FiveStarIcon />,
    name: "Alex K.",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
];

export const SOCIAL_MEDIA_ICON = [
  {
    icon: <XIcon />,
    link: "https://www.x.com",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com",
  },
  {
    icon: <InstaIcon />,
    link: "https://www.instagram.com",
  },
  {
    icon: <DiscordIcon />,
    link: "https://www.discord.com",
  },
];

export const FOOTER_LIST = [
  {
    heading: "Company",
    list: ["About", "Features", "Works", "Career"],
  },
  {
    heading: "Help",
    list: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    heading: "FAQ",
    list: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    heading: "Resources",
    list: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

export const ONLINE_PAY_APP_LIST = [
  {
    icon: <VisaIcon />,
    link: "https://www.visa.com",
  },
  {
    icon: <MasterCardIcon />,
    link: "https://www.mastercard.com",
  },
  {
    icon: <PayPalIcon />,
    link: "https://www.paypal.com",
  },
  {
    icon: <ApplePayIcon />,
    link: "https://www.applepay.com",
  },
  {
    icon: <GPayIcon />,
    link: "https://www.gpay.com",
  },
];

export const SIZE_LIST: string[] = ["Small", "Medium", "Large", "X-Large"];
