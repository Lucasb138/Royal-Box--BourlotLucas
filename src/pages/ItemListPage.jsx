import ItemList from '../components/ItemList/ItemList'
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemListPage = () => {
    const {category} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Products");
        
        getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          
          console.log(docs);
          setProduct(docs);
        });
      }, []);

    const categoryFilter = product.filter((product) => product.category === category)
    console.log(categoryFilter)

    return (
        <div>
            {category ? <ItemList product={categoryFilter}/> : <ItemList product={product} />}
        </div>
    )
}

export default ItemListPage
