import Difficulty from "../Difficulty/Difficulty";
import { Card, Image, Title, Description, Time } from "./RecipeItem.styled";

const RecipeItem = ({ recipe }) => {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.name} />
      <Title>{recipe.name}</Title>
      <Description>{recipe.description}</Description>
      <Time>{recipe.time} хв</Time>
      <Difficulty difficulty={recipe.difficulty} />
    </Card>
  );
};

export default RecipeItem;
