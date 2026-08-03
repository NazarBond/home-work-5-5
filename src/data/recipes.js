const recipes = [
  {
    id: 1,
    name: "Pizza",
    description: "Classic Italian pizza with cheese and tomatoes",
    image: `${import.meta.env.BASE_URL}images/pizza.jpg`,
    difficulty: 3,
  },
  {
    id: 2,
    name: "Burger",
    description: "Juicy burger with vegetables and sauce",
    image: `${import.meta.env.BASE_URL}images/burger.jpg`,
    difficulty: 1,
  },
  {
    id: 3,
    name: "Pasta",
    description: "Italian pasta with tomato sauce",
    image: `${import.meta.env.BASE_URL}images/pasta.jpg`,
    difficulty: 1,
  },
];

export default recipes;
