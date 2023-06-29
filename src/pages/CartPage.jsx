import { useContext } from "react"
import Cart from "../components/Cart/Cart"
import { CartContext } from "../context/ShoppingCartContext"

const CartPage = () => {

  const {cart, setCart} = useContext(CartContext)
  return (
    <div>
        <Cart></Cart>
    </div>
  )
}

export default CartPage
