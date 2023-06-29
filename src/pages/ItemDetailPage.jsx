    import ItemDetail from "../components/ItemDetail/ItemDetail"
    import { useState, useEffect } from "react"
    import { useParams } from "react-router-dom"
    import {doc, getDoc, getFirestore} from "firebase/firestore"

    const ItemDetailPage = () => {
        
        
        const [product, setProduct] = useState([])
        
        const { id } = useParams()
        console.log(id)
        
        useEffect(() => {
            const db = getFirestore();
            const oneItem = doc (db, "Products", id)
            getDoc(oneItem).then((snapshot) => {
                const data = snapshot.data();
                const productDetailed = ({id: snapshot.id, ...data})
                    setProduct(productDetailed);
                    console.log(productDetailed);
            });
        }, [id])
        

        return (
            <>
            <ItemDetail {...product}>
            
            </ItemDetail>
            </>

            
        )
    }

    export default ItemDetailPage
