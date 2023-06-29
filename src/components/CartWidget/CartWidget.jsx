import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./CartWidget.css"
const CartWidget = () => {
  

  return (
    <div>
      <Link to= "/cart" className="cart"> <ShoppingCartOutlinedIcon/> 0</Link>
    </div>
  )
}

export default CartWidget
