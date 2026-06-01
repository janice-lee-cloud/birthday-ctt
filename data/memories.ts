export interface Memory {
  id: number;
  caption: string;
  /** File in public/memories/ e.g. memory-1.jpg */
  image: string;
  rotation: number;
  x: number;
  y: number;
  zIndex: number;
}

/**
 * Photo guide — drop files into public/memories/ with these exact names:
 *
 * memory-1.jpg → Japan Adventure
 * memory-2.jpg → Ocean Park
 * memory-3.jpg → Michael Jackson Movie
 * memory-4.jpg → Favourite Date
 * memory-5.jpg → Favourite Selfie
 * memory-6.jpg → Travel Memory
 * memory-7.png → Cute Moment (PNG is fine)
 * memory-8.jpg → Our First Year
 *
 * JPG, PNG, or WebP all work (update extension below if needed).
 */
export const memories: Memory[] = [
  {
    id: 1,
    caption: "Japan Adventure 🇯🇵",
    image: "/memories/memory-1.jpg",
    rotation: -8,
    x: 5,
    y: 10,
    zIndex: 2,
  },
  {
    id: 2,
    caption: "Ocean Park 🎢",
    image: "/memories/memory-2.jpg",
    rotation: 6,
    x: 55,
    y: 5,
    zIndex: 4,
  },
  {
    id: 3,
    caption: "Michael Jackson Movie 🎬",
    image: "/memories/memory-3.jpg",
    rotation: -4,
    x: 30,
    y: 35,
    zIndex: 3,
  },
  {
    id: 4,
    caption: "Favourite Date",
    image: "/memories/memory-4.jpg",
    rotation: 10,
    x: 70,
    y: 28,
    zIndex: 5,
  },
  {
    id: 5,
    caption: "Favourite Selfie",
    image: "/memories/memory-5.jpg",
    rotation: -12,
    x: 12,
    y: 55,
    zIndex: 1,
  },
  {
    id: 6,
    caption: "Travel Memory",
    image: "/memories/memory-6.jpg",
    rotation: 5,
    x: 45,
    y: 62,
    zIndex: 6,
  },
  {
    id: 7,
    caption: "Cute Moment",
    image: "/memories/memory-7.png",
    rotation: -6,
    x: 78,
    y: 58,
    zIndex: 2,
  },
  {
    id: 8,
    caption: "Our First Year",
    image: "/memories/memory-8.jpg",
    rotation: 9,
    x: 25,
    y: 78,
    zIndex: 4,
  },
];
