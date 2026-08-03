const recipes = [
  {
    id: 1,
    name: "Pizza",
    description: "Classic Italian pizza",
    image: `${import.meta.env.BASE_URL}images/recipe1.jpg`,
    difficulty: 3,
  },
  {
    id: 2,
    name: "Burger",
    description: "Tasty homemade burger",
    image: `${import.meta.env.BASE_URL}images/recipe2.jpg`,
    difficulty: 1,
  },
  {
    id: 3,
    name: "Pasta",
    description: "Italian pasta with sauce",
    image: `${import.meta.env.BASE_URL}images/recipe3.jpg`,
    difficulty: 1,
  },
];

export default recipes;
