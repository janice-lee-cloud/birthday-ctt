export interface Memory {
  id: number;
  caption: string;
  /** File in public/memories/ — match exact name (case matters on GitHub Pages) */
  image: string;
  rotation: number;
  x: number;
  y: number;
  zIndex: number;
}

export const memories: Memory[] = [
  {
    id: 1,
    caption: "Japan Adventure 🇯🇵",
    image: "/memories/memory-1.JPG",
    rotation: -8,
    x: 5,
    y: 10,
    zIndex: 2,
  },
  {
    id: 2,
    caption: "Ocean Park 🎢",
    image: "/memories/memory-2.JPG",
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
    image: "/memories/memory-4.JPG",
    rotation: 10,
    x: 70,
    y: 28,
    zIndex: 5,
  },
  {
    id: 5,
    caption: "Favourite Selfie",
    image: "/memories/memory-5.JPG",
    rotation: -12,
    x: 12,
    y: 55,
    zIndex: 1,
  },
  {
    id: 6,
    caption: "Travel Memory",
    image: "/memories/memory-6.JPG",
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
    image: "/memories/memory-8.svg",
    rotation: 9,
    x: 25,
    y: 78,
    zIndex: 4,
  },
];
