import React, { useContext } from 'react';
import { MenuContext, menuDetails } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgMenuNav from "../../img/menuNav/imgMenuNav.jpg";
import imgMenuNav1 from "../../img/menuNav/imgMenuNav1.jpg";
import imgMenuNav2 from "../../img/menuNav/imgMenuNav2.jpg";
import imgMenuNav3 from "../../img/menuNav/imgMenuNav3.jpg";
import imgMenuNav4 from "../../img/menuNav/imgMenuNav4.jpg";
import imgMenuNav5 from "../../img/menuNav/imgMenuNav5.jpg";
import imgMenuNav6 from "../../img/menuNav/imgMenuNav6.jpg";
import imgMenuNav7 from "../../img/menuNav/imgMenuNav7.jpg";
import imgMenuNav8 from "../../img/menuNav/imgMenuNav8.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
        opacity: "0.5",
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
         textAlign: "center",
         color: "#376037",
    }, 
    navImageContainer: {
        display: 'grid',
        // gridTemplateColumns: "repeat(4, 1fr)",
        // gridTemplateRows: "repeat(2, 1fr)",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gridGap: "1rem",
        color: "#376037",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "1.5rem", 
        margin: "3rem 1rem",     
    },
     
    singleMenu: {
        cursor: "pointer", 
        background: "rgba(255, 255, 255, .6)", 
        borderRadius: "10px",
        height:'100%',
        "&:hover": {
            transform: "scale(1.05)",
            transition: "0.3s ease-in-out",
        }, 
    }, 
    menuNavImage:{
        width: "100%",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", 
        margin: "1rem 0",
        // height: "80%", 
    },
    menuName: {
        // padding: "1rem 0", 
        marginBottom: "2rem ", 
       
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
        menuTitle:{
            paddingTop: "6rem", 
            fontSize: "1.2rem", 
        }, 
        subTitle:{
            fontSize: "0.8rem", 
        }, 
        navImageContainer: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            fontSize: "1rem", 
            margin: "2rem .5rem", 
            gridGap: ".5rem", 
        }, 
    
    }

}));
const menuNavGroup = [
    [imgMenuNav1, "Appetizers"],
    [imgMenuNav2, "Traditional Classic"],
    [imgMenuNav3, "popular taste"],
    [imgMenuNav4, "Vegetables"],
    [imgMenuNav5, "Soup"],
    [imgMenuNav6, "Noodle & Rice"],
    [imgMenuNav7, "LunchSpecial"],
    [imgMenuNav8, "Beverage"]
];
const MenuNav = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();



    return (
        <div>
             <div className={classes.background}>
                    <img src={imgMenuNav} className={classes.image}></img>
                </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious food you can find with combination of color, aroma and taste</p>
                </div>
              
                <div className={classes.navImageContainer}>
                
                    {menuNavGroup.map((item, index) => {
                        return (
                            <>
    
                            <div className={classes.singleMenu} key = {index}
                            onClick = {()=>{ window.scrollTo(0, 0); setMenu({...menu, currentMenuComponentIndex: 1, currentCategoryIndex: index})}}
                            >
                                <img className={classes.menuNavImage} src={item[0]}></img>
                                <div className={classes.menuName}>{item[1]}</div>
                                
                            </div>
                            </>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
export default MenuNav;