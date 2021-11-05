import React, {useContext} from 'react';
import { AppContext } from "../AppContext";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import imgNoodle from "../img/noodles/imgNoodle.jpg";
import imgHome2 from "../img/imgHome/imgHome2.jpg"

const button = {
    border: 0,
    outline: 0,
    background: "#683476",
    color: "white",
    textTransform: "upperCase",
    cursor: "pointer",
};

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
selectMenu:{
    textAlign: "center", 
    margin: "1rem 0",
},
addToCartButton:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",  
    ...button,
    margin: "0 auto",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    marginTop: "10px",
    "&:hover": {
        background: "#86408a", 
        boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", 
    }, 
   
   
}, 
formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
},
selectEmpty: {
    marginTop: theme.spacing(2),
},
  "@media screen and (max-width: 768px)": {
       
    image: {
        width: '100%',
        objectFit: "cover",
        objectPosition: "center",
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

const theme = createTheme({
    palette: {
        primary: {
            main: "#376037",
            contrastText: "white",
        },
        light: {
            main: "#376037",
            contrastText: "white",
        }
    },
});

const giftCardArr = [10, 20, 50, 100, 200, 500];

const GiftCards = () => {
    const [state, setState] = useContext(AppContext);
    const classes = useStyles();

    const [amount, setAmount] = React.useState(0);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        if (inputLabel.current)
            setLabelWidth(inputLabel.current.offsetWidth);
    }, []);



    const handleChange = event => {
        setAmount(event.target.value);
    };


    const handleOrder = ()=>{
       
        let key = 8 + amount;
        let v = state.orderItem[key];
        let qt = 1;
        if(v){
            qt = qt +v.quantity;
        }
        setState({...state, orderItem: {
            ...state.orderItem, [key]: { category: 8, subCategory: amount, quantity: qt } }, 
                currentIndex: 3, updateTrigger: !state.updateTrigger, item: (state.item + 1) 
        })
        
    }
   
    return (
        <div>
             <div className={classes.background}>
                <img src={imgNoodle} className={classes.image}></img>
            </div>
            <main className={classes.main}>
            <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>Gift Cards</h1>
                    <p className={classes.subTitle}>JiangNan Restaurant offers e-gift cards in any amount and for any occasion.

To order yours, click on the button below and  you can make your purchase.</p>
                </div>

                <div className={classes.selectMenu}>
                        <ThemeProvider theme={theme}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Amount </InputLabel>
                                <Select
                                    value={amount}
                                    onChange={handleChange}
                                    className={classes.selectEmpty}
                                > {giftCardArr.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={index}>${item}</MenuItem>
                                    )
                                })}
                                </Select>
                            </FormControl>
                        </ThemeProvider>
                    </div>

                  
                                    <button onClick={() => {
                                          window.scrollTo(0, 0);
                                        handleOrder()

                                    }} className={classes.addToCartButton}>add to cart</button>
                                
             

            </main>
          
        
        </div>
    )
}

export default GiftCards;
