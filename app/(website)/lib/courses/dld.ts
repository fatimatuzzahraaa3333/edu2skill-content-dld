export type Dld = {
  title: string;
  description: string;
  slug: string;
};

const courses_dld: Dld[] = [
  {
    title: "Logic Gates",
    description:
      "Introduction about logic gates and its different types. Introduction about common logic gates like AND, OR, NOT, NAND, NOR, XOR, and XNOR.",
    slug: "logic-gates",
  },
  {
    title: "AND Gate",
    description:
      "Outputs will be HIGH only when all inputs are HIGH. This logic-gate performs logical multiplication in combinational logic circuits..",
    slug: "and-gate",
  },
  {
    title: "OR Gate",
    description:
      "It produces a HIGH output when any input is HIGH. It performs logical addition in combinational logic circuits.",
    slug: "or-gate",
  },
   {
    title: "NOT Gate",
    description:
      "It converts HIGH to LOW and LOW to HIGH. It also called Invertor",
    slug: "not-gate",
  },
  {
    title: "NAND Gate",
    description:
      "The NAND gate is the inverse of the AND gate and outputs LOW only when all inputs are HIGH.",
    slug: "nand-gate",
  },
  {
    title: "NOR Gate",
    description:
      "The NOR gate is the inverse of the OR gate and produces HIGH only when all inputs are LOW.",
    slug: "nor-gate",
  },
  {
    title: "XOR Gate",
    description:
      "Output will be 1, if number of 1's in inputs are ODD.",
    slug: "xor-gate",
  },
  {
    title: "XNOR Gate",
    description:
      "The XNOR gate is the inverse of the XOR gate.",
    slug: "xnor-gate",
  },
  {
    title: "Universal Gates",
    description:
      "NAND and NOR Gates Universality",
    slug: "universal-gates",
  },
  {
    title: "K-Map (2 Variables)",
    description:
      "Karnaugh Mapping for Boolean expression having 2 variables",
    slug: "k-map-variable-2",
  },
  {
    title: "K-Map (3 Variables)",
    description:
      "Karnaugh Mapping for Boolean expression having 3 variables",
    slug: "k-map-variable-3",
  },
  {
    title: "K-Map (4 Variables)",
    description:
      "Karnaugh Mapping for Boolean expression having 4 variables",
    slug: "k-map-variable-4",
  },
  
];

export function getAllTopics4DLD(): Dld[] {
  return courses_dld;
}

export function getCourseBySlug(slug: string): Dld | undefined {
  return courses_dld.find((t) => t.slug === slug);
}
