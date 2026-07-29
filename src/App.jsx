import RecipeList from "./components/RecipeList/RecipeList";
import recipes from "./data/recipes";

function App() {
  return <RecipeList recipes={recipes} />;
}

export default App;
