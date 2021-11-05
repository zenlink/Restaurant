import React, { useContext, useRef, useState } from 'react';
import { MenuContext } from "../MenuContext";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import imgAppetizer from "../../img/Appetizers/imgAppetizer.jpg";
import imgAppetizer1 from "../../img/Appetizers/imgAppetizer1.jpg";
import imgAppetizer2 from "../../img/Appetizers/imgAppetizer2.jpg";
import imgAppetizer3 from "../../img/Appetizers/imgAppetizer3.jpg";
import imgAppetizer4 from "../../img/Appetizers/imgAppetizer4.jpg";
import imgAppetizer5 from "../../img/Appetizers/imgAppetizer5.jpg";
import imgAppetizer6 from "../../img/Appetizers/imgAppetizer6.jpg";
import imgAppetizer7 from "../../img/Appetizers/imgAppetizer7.jpg";
import imgAppetizer8 from "../../img/Appetizers/imgAppetizer8.jpg";
import imgAppetizer9 from "../../img/Appetizers/imgAppetizer9.jpg";
import imgAppetizer10 from "../../img/Appetizers/imgAppetizer10.jpg";
import imgAppetizer11 from "../../img/Appetizers/imgAppetizer11.jpg";
import imgAppetizer12 from "../../img/Appetizers/imgAppetizer12.jpg";

const appetizerSummary = [
    [imgAppetizer1, "Spring Roll (6)", "$7.99"],
    [imgAppetizer2, "Steamed Pork Soup Dumpling (6)", "$8.99"],
    [imgAppetizer3, "Sweet Rice Cake w. lotus roots", "$8.99"],
    [imgAppetizer4, "Eight-treasure Rice Pudding", "$7.99"],
    [imgAppetizer5, "Glutinous Rice Ball w. Black Sesame Filling(6) ", "$7.99"],
    [imgAppetizer6, "Shanghai Fried Fish in Soy Sauce", "$9.99"],
    [imgAppetizer7, "Fried Gluten w. Black Fungus", "$6.99"],
    [imgAppetizer8, "Cucumber w. Minced Garlic", "$5.99"],
    [imgAppetizer9, "Braised Bean Curd", "$6.99"],
    [imgAppetizer10, "Chicken in Wine", "$7.99"],
    [imgAppetizer11, "Sliced Poached Beef Shank", "$8.99"],
    [imgAppetizer12, "peanuts with five seasonings", "$5.99"],
];

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
        opacity: "0.2",
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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "26vh",
        color: "#376037",
        textAlign: "center",
        textTransform: "upperCase",
        fontWeight: "bold",
    },
    selectMenu: {
        position: "absolute",
        right: 0,
        bottom: "15%",

    },
    menuTitle: {
        color: "#683476",
        padding: "1rem",

    },
    altSelect: {
        color: 'red',
    },
    subTitle: {
        fontSize: "1.3rem",
    },
    menu: {
        textAlign: "center",
        cursor: "pointer",
        margin: "1rem 0",
        color: "#376037",
        textDecoration: "underline",
    },
    navImageContainer: {
        display: 'grid',
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gridGap: "1rem",
        color: "#376037",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",

        margin: "3rem 1rem",

    },

    singleMenu: {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",

    },
    menuNavImage: {
        width: "100%",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        margin: "1rem 0",
        // height: "80%", 
    },
    // namePriceGroup: {
    //     minHeight: "1rem",
    // }, 
    menuName: {
        padding: "1rem 0",
        
        fontSize: "1.2rem",
    },
    price: {
        fontSize: "1.2rem",
    },
    addToCartButton: {
        ...button,
        margin: "1rem",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    "@media screen and (max-width: 1500px)": {
        image: {
            width: '100%',
            objectFit: "cover",
            objectPosition: "right",
        },
        main: {
            width: "90%",
        },
        navImageContainer: {

            // gridTemplateColumns: "repeat(2, 1fr)",
            // gridTemplateRows: "repeat(4, auto)",
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
const Appetizers = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();


    const [menuCategory, setMenuCategory] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        if (inputLabel.current)
            setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setMenuCategory(event.target.value);
        setMenu({ ...menu, currentMenuComponentIndex: event.target.value + 1 });
    };

    return (
        <div>

            <div className={classes.background}>
                <img src={imgAppetizer} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>APPETIZERS</h1>
                    <div className={classes.selectMenu}>
                        <ThemeProvider theme={theme}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Menu</InputLabel>
                                <Select
                                    value={menuCategory}
                                    onChange={handleChange}
                                    className={classes.selectEmpty}
                                > {menu.titleArr.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={index}>{item}</MenuItem>
                                    )
                                })}
                                </Select>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <p className={classes.subTitle}>Start your meal with our tasty appetizers</p>
                </div>

                <div className={classes.menu}
                    onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>


                <div className={classes.navImageContainer}>
                    {appetizerSummary.map((item, index) => {
                        return (
                            <div>
                                <div className={classes.singleMenu} key={index}>
                                    <img className={classes.menuNavImage} src={item[0]}></img>
                                    <div className={classes.namePriceGroup}>
                                        <div className={classes.menuName}>{item[1]}</div>
                                        <div className={classes.price}>{item[2]}</div>
                                    </div>
                                    <button className={classes.addToCartButton}>add to cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
};

export default Appetizers; 
