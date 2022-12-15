import { useNavigate } from 'react-router-dom';
import {BackgroundImage, DirectoryItemContainer, Body} from  './category-item.styles.jsx';


const CategoryItem = ({category}) => {

    const {imageUrl, title, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)

    return(
      <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            
            <Body>
                <h2>{title}</h2>
                <p onClick={onNavigateHandler}>Shop Now</p>
            </Body>

      </DirectoryItemContainer>
    )
    
}

export default CategoryItem;