import React from 'react';
import imgHotDish from "../img/hotDish/imgHotDish.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  background: {
      display: "flex",
      justifyContent: "center",
      position: "fixed",
      width: '100%',
      minHeight: "100vh",
      opacity: "0.4",
      zIndex: "-1",
  },
  image: {
      width: '80%',

  },
  main: {
      width: "80%",
      margin: "0 auto",
  },
  menuTitleContainer: {
    textAlign: "center",
    textTransform: "upperCase",
    fontWeight: "bold",
},
menuTitle: {
    paddingTop: "8rem", 
    color: "#683476",
    padding: "1rem",
    letterSpacing: "3px",
},
subTitle: {
    fontSize: "1rem", 
    textTransform: "initial",
    color: "#376037",
}, 
  "@media screen and (max-width: 768px)": {
       
    image: {
        width: '100%',
        objectFit: "cover",
        objectPosition: "left",
    },
    main: {
        width: "100%",
    },
    menuTitle:{
      fontSize: "1.2rem", 
      paddingTop: "6rem", 
  }, 
  subTitle:{
      fontSize: "0.8rem", 
  }, 
  }

}));

 const Events = () => {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.background}>
                <img src={imgHotDish} className={classes.image}></img>
            </div>
            <main className={classes.main}>
            <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>our events</h1>
                    <p className={classes.subTitle}>Throughout the year, we celebrates many restaurant events to get you excited. Stop by on holidays for discounted drinks and other menu specials. You'll love what's on tap.</p>
                </div>
            </main>
          
        
        </div>
    )
}

export default Events;
