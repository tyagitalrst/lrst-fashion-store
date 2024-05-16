import { useNavigate } from "react-router-dom";

import {
  BackgroudImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroudImage image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Buy Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
