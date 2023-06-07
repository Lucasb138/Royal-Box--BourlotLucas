import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const ItemDetailPage = () => {
    
    const URL = "https://fakestoreapi.com/products"
    const [product, setProduct] = useState([])
    const { id } = useParams()
    console.log(id)

    const getProducts = async () => {
        const response = await fetch(URL)
        const data = await response.json();
        console.log(data);
        return data
    }
    useEffect(() => {
        getProducts().then((product) => setProduct(product))
    }, [])

    const productFilter = product.filter((product) => product.id == id)
    console.log (productFilter)
    const productFiltered = productFilter.length > 0 ? productFilter[0] : null
    console.log(productFiltered)

    return (
        <>
        {productFiltered && (
        <ItemDetail 
                title = {productFiltered.title}
                image = {productFiltered.image}
                description = {productFiltered.description}
                price = {productFiltered.price}
        >
        </ItemDetail>
    )}
        </>

        
    )
}

export default ItemDetailPage
