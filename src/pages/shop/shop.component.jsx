import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./shop.styles.scss";

const Shop = () => {

    const {products} = useContext(ProductsContext);
    
    return(
        <div className='products-container'>
            {
                products.map((product) => {
                   return <ProductCard key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default Shop;