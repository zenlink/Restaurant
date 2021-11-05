import React, { useContext, useRef, useState } from 'react';
import { AppContext } from "../../AppContext";
import { MenuContext, MenuCategoryData } from "../MenuContext";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const button = {
    border: 0,
    outline: 0,
    background: "#683476",
    color: "white",
    textTransform: "upperCase",
    cursor: "pointer",
    "&:hover": {
        background: "#86408a",
        boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    },
};
const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
        opacity: "0.5",
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
        fontSize: "1rem",
        textTransform: "initial",
        color: "#376037",
    },
    menu: {
        textAlign: "center",
        marginTop: "1rem",
        textTransform: "capitalize",
    },
    menuSpan: {
        cursor: "pointer",
        textDecoration: "underline",
        color: "#376037",
        "&:hover": {
            fontWeight: "bolder",
        },
    },
    navImageContainer: {
        // margin: "0 auto", 
        display: 'grid',
        // maxWidth: "1170px", 
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        // gridTemplateRows: "repeat(auto, 1fr)",
        gridGap: "1rem",
        color: "#376037",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        margin: "3rem 1rem",
        // background: "rgba(255, 255, 255, 0.7)",
        // borderRadius: "10px",
    },

    // singleMenu: {
    //     display: "grid",
    //     gridTemplateRows: "60% 17% 10% 10%",
    //     justifiyContent:"center", 
    //     alignItems: "center",
    //     background: "rgba(255, 255, 255, 0.7)",
    //     borderRadius: "10px",
    //     height: '100%',
    // },
    singleMenu: {
        display: "flex",
        flexFlow: "column",
         background: "rgba(255, 255, 255, 0.7)",
        borderRadius: "10px",
    },
    menuNavImage: {
        width: "100%",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        margin: "1rem 0",
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.2)",
            transition: "0.5s linear",
        },
    },
    menuName: {
        padding: "1rem 0",
        fontSize: "1.2rem",
    },
    price: {
        fontSize: "1.2rem",
    },
    // addToCartButton: {
    //     ...button,
    //     margin: "1rem",
    //     padding: "0.5rem 1rem",
    //     fontSize: "1rem",
    //     marginTop: "10px",
    //     justifySelf: "center",
    // },
    addToCartButton: {
        ...button,
        marginTop: "auto",
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
    "@media screen and (max-width: 1000px)": {

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
        navImageContainer: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            margin: "2rem .5rem",
            gridGap: ".5rem",
        },
        menuNavImage: {
            margin: "0.6rem 0",

        },
        menuName: {
            padding: "0",
            fontSize: "1rem",
        },
        price: {
            fontSize: "1rem",
        },
        addToCartButton: {
            fontSize: ".8rem",
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
const MenuDetails = () => {
    const [state, setState] = useContext(AppContext);
    const [menu, setMenu] = useContext(MenuContext);


    const properties = MenuCategoryData[menu.currentCategoryIndex];


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
        setMenu({ ...menu, currentMenuComponentIndex: 1, currentCategoryIndex: event.target.value });
    };

    const handleOrder = (id) => {

        let key = menu.currentCategoryIndex + '-' + id;
        let v = state.orderItem[key];
        let qt = 1;
        if (v) {
            qt = qt + v.quantity;
        }
        setState({
            ...state, orderItem: {
                ...state.orderItem, [key]: { category: menu.currentCategoryIndex, subCategory: id, quantity: qt }
            },
            currentIndex: 1, updateTrigger: !state.updateTrigger, item: (state.item + 1), dialogueBoxOpen: true,
        })

    }

    return (
        <div>

            <div className={classes.background}>
                <img src={properties.backgroundImage} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>{properties.title}</h1>

                    <p className={classes.subTitle}>{properties.subTitle}</p>
                </div>
                <div className={classes.menu}>
                    <span className={classes.menuSpan} onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu
                    </span>  {properties.title}

                    <div className={classes.selectMenu}>
                        <ThemeProvider theme={theme}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Menu </InputLabel>
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
                </div>

                <div className={classes.navImageContainer}>
                    {properties.items.map((item, index) => {
                        return (
                            <div className={classes.singleMenu} key={index}>
                                <img className={classes.menuNavImage} src={item[0]}></img>
                                <div className={classes.menuName}>{item[1]}</div>

                                <div className={classes.price}>${item[2]}</div>
                                <button onClick={() => {
                                    window.scrollTo(0, 0);
                                    handleOrder(index)

                                }} className={classes.addToCartButton}>add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
};

export default MenuDetails; 
