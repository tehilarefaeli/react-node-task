
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import {
  getPendingSelector,
  getPhotosSelector,
  getErrorSelector,
} from "store/photo/selectors";
import { fetchPhotoRequest } from "store/photo/actions";
import {Photo } from "store/photo/types";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

  export default function Data() {

    const dispatch = useDispatch();
    const photos = useSelector(getPhotosSelector);
    const navigate = useNavigate();


    const useStyles = makeStyles({
      media: {
        display: 'block',
        padding: '5px',
        color: 'white',
        height: 140,
        backgroundSize: '50%',
        margin:'15px'
      },
      cardCss: {
        margin: '15px',
        minWidth: '150px',
        filter: 'drop-shadow(0px 0px 10px #3335)',
      },
    });
    const classes = useStyles();
    const handleLogout = () =>{
      navigate('/')

    }
  
  
    useEffect(() => {
      dispatch(fetchPhotoRequest());
    }, [dispatch]);

    return(
      <Grid>
         <Button onClick={handleLogout} size="small">Logout</Button>
      <Grid container>
     
      {  Object.values(photos)?.map((photo:Photo , index: number) => ( 
      <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      margin="15px"
      className={classes.cardCss}
  
    >
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={photo.url}
       
      />
      <CardContent >
        <Typography height="40px" variant="body2" color="text.secondary">
        {photo.title}
        </Typography>
      </CardContent>
    </Card>
    
      </Grid>
     ) )}
     
      </Grid>   
      </Grid>
    )

}
                





   