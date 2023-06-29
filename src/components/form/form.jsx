import {collection, getFirestore, addDoc} from "firebase/firestore"

const form = () => {
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const db = getFirestore();
    const ordersCollection = collection(db, "orden")

    const handleSubmit = (e)=>{
        e.preventDefault();
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    
    const order = {
        name, 
        email,
    }
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre y Apellido' onChange={(e)=> setName(e.target.value)} />
        <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
        <button type='submit'>Enviar información</button>
    </form>
    <p>Orden Nº {orderId}</p>
    </div>
  )
}

export default form
