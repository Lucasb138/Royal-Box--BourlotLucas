import ItemList from '../components/ItemList/ItemList'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListPage = () => {
    const URL = "https://fakestoreapi.com/products"
    const {category} = useParams()
    const [product, setProduct] = useState([])
    
    const getProducts = async () => {
        const response = await fetch(URL)
        const data = await response.json();
        console.log(data);
        return data
    }
    useEffect(() => {
        getProducts().then((product) => setProduct(product))
    }, [])

    const categoryFilter = product.filter((product) => product.category === category)
    console.log(categoryFilter)

    return (
        <div>
            {category ? <ItemList product={categoryFilter}/> : <ItemList product={product} />}
        </div>
    )
}

export default ItemListPage
