import React, { useContext, useEffect } from 'react';
import { AppContext } from "../AppContext";
import { MenuCategoryData } from "./MenuContext";
import imgBag from "../img/imgBag/imgBag.jpg";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FaEdit, FaTrash } from "react-icons/fa";

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
        height: "100vh",
        opacity: "0.3",
        zIndex: "-1",
        top: 0,
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
        fontSize: "1.3rem",
        color: "#376037",
    },
    orderContainer: {
        display: "grid",
        gridTemplateColumns: "20% 20% 30% 15% 15%",
        gridGap: "10px",
        fontSize: "1rem",
        margin: ".5rem 3rem",
        color: "#376037",
        // justifyContent: "center",
        alignItems: "center",
        background: "rgba(243,241,239, .6)",
        boxShadow: "10px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "10px",
        // textAlign: "center", 
    },
    smallImage: {
        width: "40%",
        margin: "5px",
        boxShadow: "10px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    },
    deleteButton: {
        cursor: "pointer",
        textDecoration: "underline", 
    },
    btnGroup: {
        textAlign: "center",

    },
    orderButton: {
        margin: "1rem",
        ...button,
        padding: "1rem 2rem",
        fontSize: "1.5rem",
    },
    priceWithRemove:{
        textAlign: "center",
    }, 
    formControl: {
        margin: theme.spacing(1),
        minWidth: 80,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    subTotal: {
        textAlign: "right",
        textTransform: "capitalize", 
        margin: ".5rem 3.5rem",
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
        menuTitle: {
            fontSize: "1.2rem",
            paddingTop: "6rem",
        },
        subTitle: {
            fontSize: "0.8rem",
        },
        orderButton: {
            padding: "1rem 2rem",
            fontSize: "1rem",
        },
        orderContainer: {
            gridTemplateColumns: "20% 25% 0% 20% 20% ",
            margin: "5px",
            fontSize: "0.8rem", 
        },
        smallImage: {
            width: "80%",

        },
        formControl: {
            minWidth: 50,
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

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Bag = () => {
    const [state, setState] = useContext(AppContext);
    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        if (inputLabel.current)
            setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    // useEffect(() => {
    //     getSubtotal();
    // }, [])

    // useEffect(() => {
    //     getSubtotal();
    // }, [state.orderItem])


    const handleChange = (event, key) => {
        setState({ ...state, orderItem: { ...state.orderItem, [key]: { ...state.orderItem[key], quantity: event.target.value } } });

    };

    const handleDelete = (id) => {
        const newOrderItem = { ...state.orderItem };
        delete newOrderItem[id];
        setState({ ...state, orderItem: newOrderItem });
    }

    const handleClear = () => {
        setState({ ...state, orderItem: {}, item: 0 })
    }

    setTimeout(()=>{
        if(state.item >0){
            handleClear()
        }
    }, 200000);

   
    // const getSubtotal = () => {
    //     let totalAmount = 0;
    //     let totalItem = 0;
    //     Object.entries(state.orderItem).forEach((x, index) => {
    //         totalAmount += x[1].quantity * MenuCategoryData[x[1].category].items[x[1].subCategory][2];
    //         totalItem += x[1].quantity
    //     })

    //     setState({ ...state, subTotal: totalAmount, item: totalItem });
    //     return totalAmount;
    // }

    return (
        <div>

            <div className={classes.background}>
                <img src={imgBag} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                {state.item === 0 ?
                    <div className={classes.menuTitleContainer}>
                        <h1 className={classes.menuTitle}>your cart is empty</h1>
                        <p className={classes.subTitle}>Head to the menu page to add some food!</p>
                    </div> :
                    <div className={classes.menuTitleContainer}>
                        <h1 className={classes.menuTitle}>your order</h1>
                    </div>}


                {Object.entries(state.orderItem).map((x, index) => {
                    return (
                        <div key ={index} className={classes.orderContainer}>
                            <img src={MenuCategoryData[x[1].category].items[x[1].subCategory][0]} className={classes.smallImage}></img>
                            <div>{MenuCategoryData[x[1].category].items[x[1].subCategory][1]}</div>
                            <div></div>
                            <div className={classes.selectMenu}>
                                <ThemeProvider theme={theme}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>QTY</InputLabel>
                                        <Select
                                            value={x[1].quantity}
                                            onChange={(e) => handleChange(e, x[0])}
                                            className={classes.selectEmpty}
                                        > {numArr.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>{item}</MenuItem>
                                            )
                                        })}
                                        </Select>
                                    </FormControl>
                                </ThemeProvider>
                            </div>
                            <div className = {classes.priceWithRemove}>
                                <div>${MenuCategoryData[x[1].category].items[x[1].subCategory][2]}</div>

                                <div className={classes.deleteButton}
                                    onClick={() => handleDelete(x[0])}>
                                    Remove
                                    </div>
                            </div>
                        </div>
                    )
                })}
                {state.item > 0 && <div className ={classes.subTotal}>order subtotal: <b>${(state.subTotal).toFixed(2)}</b></div>}

                <div className={classes.btnGroup}>
                    <button onClick={() => {
                        setState({
                            ...state, currentIndex: 1,
                        })
                    }} className={classes.orderButton}>back to menu</button>

                    <button onClick={() => {state.item === 0?
                        setState({
                            ...state, currentIndex: 0,
                        }):  setState({
                            ...state, currentIndex: 6,
                        })
                    }} className={classes.orderButton}>{state.item === 0 ? "back to home" : "check out"}</button>
                </div>


            </main>
        </div>
    )
}

export default Bag; 
