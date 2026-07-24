import PropTypes from "prop-types";
import { Badge } from "./Difficulty.styled";

const Difficulty = ({ difficulty }) => {
  return (
    <Badge level={difficulty}>
      {difficulty === 0 && "Легкий"}
      {difficulty === 1 && "Середній"}
      {difficulty === 3 && "Складний"}
    </Badge>
  );
};

Difficulty.propTypes = {
  difficulty: PropTypes.oneOf([0, 1, 3]).isRequired,
};

export default Difficulty;
