export interface ConstellationStar {
  id: number;
  equation: string;
  message: string;
  x: number;
  y: number;
}

export const constellationStars: ConstellationStar[] = [
  {
    id: 1,
    equation: "Actions > Words",
    message:
      "I love how your actions are always bigger than your words. You may not always say a lot, but you show your love in ways that matter.",
    x: 18,
    y: 28,
  },
  {
    id: 2,
    equation: "You + Me = Best Memories",
    message:
      "Thank you for being the person I can always count on, whether we're travelling, laughing, or simply spending an ordinary day together.",
    x: 72,
    y: 22,
  },
  {
    id: 3,
    equation: "Japan + Ocean Park + Movie Dates = ❤️",
    message:
      "From Japan, to Ocean Park, to watching movies together, every memory feels more special because I shared it with you.",
    x: 42,
    y: 55,
  },
  {
    id: 4,
    equation: "Duck Duck BB × 25 Years = 🎉",
    message:
      "Happy 25th Birthday, Duck Duck BB. Thank you for making this past year one of my happiest chapters. I can't wait to create even more memories with you.",
    x: 65,
    y: 72,
  },
];

export const constellationConnections: [number, number][] = [
  [1, 2],
  [2, 3],
  [1, 3],
  [3, 4],
  [2, 4],
];
