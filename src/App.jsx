import { GlobalStyles } from "./GlobalStyles";
import RecipeList from "./components/RecipeList/RecipeList";
import { recipes } from "./data/recipes";

function App() {
  return (
    <>
      <GlobalStyles />

      <h1>Список рецептів</h1>

      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
