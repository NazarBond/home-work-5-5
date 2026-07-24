import PropTypes from "prop-types";
import Difficulty from "../Difficulty/Difficulty";
import { Card, Image, Title, Description, Time } from "./RecipeItem.styled";

const RecipeItem = ({ recipe }) => {
  return (
    <Card $hard={recipe.difficulty === 3}>
      <Image src={recipe.image} alt={recipe.title} />

      <Title>{recipe.title}</Title>

      <Description>{recipe.description}</Description>

      <Time>Час приготування: {recipe.time}</Time>

      <Difficulty difficulty={recipe.difficulty} />
    </Card>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf([0, 1, 3]).isRequired,
  }).isRequired,
};

export default RecipeItem;
