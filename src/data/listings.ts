export type Listing = {
  id: string;
  title: string;
  city: string;
  area: number;
  price: number;
  purpose: "rent" | "sale" | "land";
  type: "apartment" | "house" | "land";
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  createdAt: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Apartament 2+1 modern",
    city: "Prizren",
    area: 92,
    price: 450,
    purpose: "rent",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "2",
    title: "Shtëpi familjare me oborr",
    city: "Prishtinë",
    area: 180,
    price: 165000,
    purpose: "sale",
    type: "house",
    bedrooms: 4,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "3",
    title: "Tokë për investim (afër rrugës)",
    city: "Suharekë",
    area: 1200,
    price: 72000,
    purpose: "land",
    type: "land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: "4",
    title: "Garsoniere premium në qendër",
    city: "Prizren",
    area: 45,
    price: 320,
    purpose: "rent",
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: "5",
    title: "Apartament 3+1 i ndriçuar",
    city: "Pejë",
    area: 120,
    price: 138000,
    purpose: "sale",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: "6",
    title: "Tokë bujqësore — dokumentacion i rregullt",
    city: "Gjakovë",
    area: 2400,
    price: 51000,
    purpose: "land",
    type: "land",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1800&q=80",
    createdAt: new Date(Date.now() - 518400000).toISOString(),
  },
];
