import PropTypes from "prop-types";
import Difficulty from "../Difficulty/Difficulty";
import { Item, Image, Title, Description } from "./RecipeItem.styled";

const RecipeItem = ({ recipe }) => {
  return (
    <Item>
      <Image src={recipe.image} alt={recipe.name} />

      <div>
        <Title>{recipe.name}</Title>
        <Description>{recipe.description}</Description>
        <Difficulty Difficulty={recipe.difficulty} />
      </div>
    </Item>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf([0, 1, 3]).isRequired,
  }).isRequired,
};

export default RecipeItem;
