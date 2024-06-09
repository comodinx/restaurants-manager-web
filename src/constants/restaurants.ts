export type Restaurant = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: "Salud",
    description:
    "Todo relacionado con la salud física y el tratamiento de enfermedades en tu mascota. Incluye información sobre síntomas, tratamientos y cuidados médicos.",
    icon: "ic-pet-health.svg",
  },
  {
    id: 2,
    title: "Cuidados",
    description:
      "Asuntos cotidianos y necesidades básicas de tu mascota, como alimentación, higiene, desparasitación y vacunación. Proporciona orientación para el cuidado general.",
    icon: "ic-pet-grooming.svg",
  },
  {
    id: 3,
    title: "Conducta",
    description:
      "Enfoque en el comportamiento, la socialización y la interacción de tu mascota. Incluye temas como adaptación, convivencia con otras mascotas y adiestramiento básico.",
    icon: "ic-pet-walking.svg",
  },
];
