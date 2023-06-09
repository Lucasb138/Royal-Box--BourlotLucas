import "./item.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";



const Item = ({id, price, name, image,}) => {
  const navigate = useNavigate();

  return (
    <>
    <div className="card">
    <Card sx={{ width: 300, marginTop: 4, border: 1, height: 500}} onClick={() => navigate(`/item/${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {image}
          alt={name}
          style={{ backgroundPosition: "cover",}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
    
  )
}

export default Item
