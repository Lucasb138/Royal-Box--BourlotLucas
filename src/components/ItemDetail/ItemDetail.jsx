
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./ItemDetail.css"
import Counter from '../Counter/Counter';


const ItemDetail = ({name, image, price, color, size}) => {

  const detail = size? `Size: ${size}` : `Color: ${color}`; 
  return (
  
    <div className= "DetailedProduct">

<Card sx={{ maxWidth: 380 }} >
        <CardMedia
          component="img"
          height="340"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} - <Typography sx={{color: "green"}}>${price}</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail}
          </Typography>
          <Counter></Counter>
        </CardContent>

    </Card>

    </div>
  )}
export default ItemDetail
