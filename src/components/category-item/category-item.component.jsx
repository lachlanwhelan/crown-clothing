import './category-item.styles.scss';


const CategoryItem = ({category}) => {

    const {imageUrl, title} = category;

    return(
        <div className="category-container">
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', 'backgroundSize': 'cover'}}/>
        
        <div className="category-body-container">
            <h4>{title}</h4>
            <p>Shop Now</p>
        </div>

      </div>
    )
    
}

export default CategoryItem;