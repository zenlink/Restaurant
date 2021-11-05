import React from 'react';
import imgBeverage from "../img/beverage/imgBeverage.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "22vh",
        textAlign: "center",
        textTransform: "upperCase",
        fontWeight: "bold",
    },
    menuTitle: {
        color: "#683476",
        padding: "1rem",
        letterSpacing: "3px",
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
        },
    }
}));

const Final = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.background}>
                <img src={imgBeverage} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>Transaction Complete</h1>
                </div>
            </main>
        </div>
    )
};

export default Final;