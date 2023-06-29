import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./CategoryMenu.css"

export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
      sx={{bgcolor: "black", color: "white", 
      "&:hover": {bgcolor: "#1e1e1e", color: "#765594;"}
    }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter by category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to= {`/category/${"refrigeration"}`} className='category'><MenuItem onClick={handleClose}>Refrigeration</MenuItem></Link>
        <Link to= {`/category/${"cooking"}`} className='category'><MenuItem onClick={handleClose}>Cooking</MenuItem></Link>
        <Link to= {`/category/${"laundry"}`} className='category'><MenuItem onClick={handleClose}>Laundry</MenuItem></Link>
        <Link to= {`/category/${"mattresses"}`} className='category'><MenuItem onClick={handleClose}>mattresses</MenuItem></Link>
      </Menu>
    </div>
  );
}