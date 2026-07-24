import PropTypes from "prop-types";
import RecipeItem from "../RecipeItem/RecipeItem";
import { List } from "./RecipeList.styled";

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
