import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from "../AppContext";
import { MenuCategoryData } from "./MenuContext";
import { makeStyles } from "@material-ui/core/styles";
import { FaListUl, FaWarehouse, FaWindowClose, FaShoppingCart,FaGithub } from "react-icons/fa"


const singleNav1 = {
    fontSize: "1.2rem",
    padding: "0 1rem",
    color: "#376037",
    cursor: "pointer",
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-2rem",
        display: "block",
        width: "70%",
        height: "3px",
        background: "#376037",
        transition: "transform 200ms ease-in",
        transform: "scale(0)",
    },
    "&:hover&::after": {
        transform: "scale(1)",
    },
};
const orderContainerGeneral = {
    display: "flex",
    justifyContent: "space-between",
   textAlign: "center", 
    color: "black",
    fontSize: "0.8rem",
    padding: "10px 20px",
};
const useStyles = makeStyles(theme => ({
    navContainer: {
        position: "fixed",
        right: 0,
        left: 0,
        top: 0,
        padding: ".5rem 4rem",
        zIndex: "1",
        background: "rgba(255, 255, 255, 0)",
        transition: "0.7s ease-in-out",
    },
    showBackground: {
        background: "rgba(255, 255, 255, 0.95)",
    },

    nav: {
        display: "flex",
        justifyContent: "space-between",
    },

    brandContainer: {
        display: "flex",
        fontSize: "2rem",
        color: "#683476",
        cursor: "pointer",
        transition: "0.7s ease-in-out",
       
    },
    showSmallFont: {
        fontSize: "1.6rem",
       
    },
    home: {
        fontFamily: "Volkhov, serif",
        fontFamily: "Charm, cursive",
        padding: "0 3px",
    },
    logo: {
        padding: ".6rem",
        color: "white",
        background: "#376037",
        borderRadius: "50%",
        alignSelf: "center",
    },
    githublogo:{
        alignSelf: "center",
        paddingLeft:".3rem",
        cursor:"pointer"
    },
    jiangnan: {
        color: "#376037",
    },
    restaurant: {
        marginTop: "-10px",
        fontSize: "1.6rem"
    },
    otherContainer: {
        display: "flex",
        alignItems: "center",
    },
    bagBtnContainer: {
        display: "flex",
        alignItems: "center",
    },
    btn: {
        display: "none",
    },
    singleNav: {

        ...singleNav1,

    },
    singleNavBag: {
        positition: "relative",
        fontSize: "1.2rem",
        padding: "0 1rem",
        color: "#376037",
        cursor: "pointer",

    },

    label: {
        padding: "0 1rem",
        color: "#376037",
        cursor: "pointer",
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-2rem",
            display: "block",
            width: "70%",
            height: "3px",
            background: "#376037",
            transition: "transform 200ms ease-in",
            transform: "scale(1)",
        },
    },
    bagItem: {
        fontSize: "1rem",

    },
    bagDialogueContainer: {
        // display: "none",
        position: "absolute",
        background: "rgba(243,241,239, .95)",
        top: "80px",
        right: "0px",
        width: "275px",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "10px", 
        transform: "scale(0)", 
        transformOrigin: "top", 
        transition: "transform 500ms cubic-bezier(.5, 0, .5, 1)",
        maxHeight: "600px", 
        overflow: "scroll", 
        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "60%",
            width: 0,
            height: 0,
            border: "20px solid transparent",
            borderBottomColor: "rgba(243,241,239, .8)",
            borderTop: 0,
            borderRight: 0,
            marginLeft: "-10px",
            marginTop: "-20px",
           
        },

    },
    showBagDialogueContainer: {
        transform: "scale(1)",
        // display: "block",
    },

    dialogueTitle: {
        color: "#683476",
        padding: "1rem",
        letterSpacing: "3px",
        textAlign: "center",
        textTransform: "capitalize",
    },
    dialogueButtonGroup: {
        display: "flex", 
        flexDirection: "column", 
    }, 
    dialogueButton: {
        border: 0,
        outline: 0,
        background: "#683476",
        color: "white",
        textTransform: "upperCase",
        cursor: "pointer",
        margin: "1rem",
        padding: "0.5rem 1rem",
        fontSize: ".8rem",
        marginTop: "10px",
        justifySelf: "center",
    },
    tableTitle: {
        ...orderContainerGeneral,
        textTransform: "upperCase",
    },
    divider: {
        margin: "0 20px",
        color: "grey",
    },
    orderContainer: {
        ...orderContainerGeneral,
        textAlign: "left", 
        color: "#376037",
    },
    tableBottom: {
        ...orderContainerGeneral,
        textTransform: "upperCase",
    },
   

    "@media screen and (max-width: 768px)": {
        navContainer: {
            padding: ".5rem 1.5rem",
        },

        brandContainer: {
            fontSize: "1.5rem",
        },
        showSmallFont: {
            fontSize: "1.3rem",
        },
        nav: {
            // position: "relative",
            alignItems: "flex-start",
        },

        btn: {
            display: "block",
            paddingRight: "1rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: "#376037",
            zIndex: 5,
        },
        otherContainer: {
            position: "absolute",
            display: "block",
            padding: "2rem 4rem",
            // display: "none",
            right: "0",
            // top: "100%",
            transform: "translateX(100%)",
            transition: "transform 500ms cubic-bezier(.5, 0, .5, 1)",
            background: "rgba(255, 255, 255, 0.95)",
            zIndex: "1",
        },
        showOtherContainer: {
            display: "block",
            transform: "translateX(0%)",
        },
        singleNav: {
            padding: ".8rem 0",
            color: "#683476",
            "&::after": {
                display: "none",
            },
            "&:hover": {
                color: "#376037",
                fontWeight: "bold",
            },

        },
        singleNavBag: {
            position: "relative",
            padding: ".8rem 0",
            color: "#683476",
            fontSize: "1.5rem",
            // "&::after": {
            //     display: "none",
            // },
            // "&:hover": {
            //     color: "#376037",
            //     fontWeight: "bold",
            // },
        },
        label: {
            color: "#376037",
            fontWeight: "bold",
        },
        bagItem: {
            position: "absolute",
            background: "#376037",
            color: "white",
            padding: "1px 4px",
            top: "5px",
            right: "-8px",
            fontSize: ".9rem",
            border: "1px solid white",
            borderRadius: "5px",
            fontSize: ".8rem",
        },
        bagDialogueContainer: {
            top: "60px",
            right: "-24px",
            maxHeight: "275px", 
            "&::after": {
                left: "85%",
            },
        },
        dialogueTitle: {
            fontSize: "1.2rem",
        },

    },
}));

const Nav = () => {
    const [state, setState] = useContext(AppContext);
    const [btnOpen, setBtnOpen] = useState(false);
    const navTrack = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        if (navTrack.current) {
            setState({ ...state, navTop: navTrack.current.offsetHeight });
        }
    }, [state.navTop]);

    const handleClick = () => {
        setBtnOpen(!btnOpen);
    }

    const handleBagClick = () => {
        window.scrollTo(0, 0);
        setBtnOpen(false);
        setState({
            ...state, currentIndex: 5, updateTrigger: !state.updateTrigger
        })
    }
    const handleBagToggle = (e) => {
        // e.stopPropagation();
        window.scrollTo(0, 0);
        setBtnOpen(false);
        setState({
            ...state, dialogueBoxOpen: !state.dialogueBoxOpen
        })
    }

    const loadListener = (e) => {
        getWindowWidth();
        // window.scrollTo(0, 0);
    };
    const getWindowWidth = () => {
        setState((c) => { return { ...c, windowWidth: window.innerWidth } })
    }
    useEffect(() => {
        window.addEventListener("load", loadListener);
        return () => {
            window.addEventListener("load", loadListener);
        }
    }, []);

    const handleGithubClick = () => {
        window.location.href = "https://github.com/zenlink/Restaurant"
    }

    return (
        <div ref={navTrack} className={state.isScrollTop ? classes.navContainer : `${classes.navContainer} ${classes.showBackground}`} >
            <div className={classes.nav}>
                <div onClick={() => {
                    window.scrollTo(0, 0);
                    setBtnOpen(false);
                    setState({
                        ...state, currentIndex: 0,
                    })
                }} className={state.isScrollTop ? classes.brandContainer : `${classes.brandContainer} ${classes.showSmallFont}`} >
                    <div className={classes.logo}><FaWarehouse></FaWarehouse></div>
                    <div className={classes.home}>
                        <div className={classes.jiangnan}>{state.navArr[0]}</div>
                        <div className={classes.restaurant}>Restaurant</div>
                    </div>
                    <div className ={classes.githublogo}><FaGithub onClick={handleGithubClick}/></div>
                </div>

                <div className={btnOpen ? `${classes.otherContainer} ${classes.showOtherContainer}` : classes.otherContainer}>
                    {state.navArr.map((nav, index) => {
                        if (index === 0 || index === 5) { return }
                        return (
                            <div key={index}
                                className={state.currentIndex === index ? `${classes.singleNav} ${classes.label}` : classes.singleNav}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setBtnOpen(false);
                                    setState({
                                        ...state, currentIndex: index, updateTrigger: !state.updateTrigger
                                    })
                                }}>
                                {nav}
                            </div>
                        )

                    })}
                </div>

                <div className={classes.bagBtnContainer}>
                    <div className={classes.btn}
                        onClick={handleClick}>
                        {btnOpen ? <FaWindowClose /> : <FaListUl />}
                    </div>
                    <div className={
                        // state.currentIndex === 5 ? `${classes.singleNavBag} ${classes.label}` : 
                        classes.singleNavBag}
                        onClick={
                            state.item === 0 ? () => handleBagClick() : (e) => handleBagToggle()
                        }
                    // () => {
                    // window.scrollTo(0, 0);
                    // setBtnOpen(false);
                    // setState({
                    //     ...state, currentIndex: 5
                    // })
                    // }}
                    ><span className={classes.bagItem}>{state.windowWidth > 768 ? `${state.item} ITEMS` : state.item}</span> <FaShoppingCart />

                        {/* {state.currentIndex === 1 && state.item > 0 &&  */}
                        <div className={state.dialogueBoxOpen ? `${classes.bagDialogueContainer} ${classes.showBagDialogueContainer}` : classes.bagDialogueContainer}>

                            <h2 className={classes.dialogueTitle}>your order</h2>
                            <div>
                                <div className={classes.tableTitle}>
                                    <div>Item</div>
                                    <div>QTY</div>
                                </div>
                                <hr className={classes.divider}></hr>
                                {Object.entries(state.orderItem).map((x, index) => {
                                    return (
                                        <div key ={index} className={classes.orderContainer}>
                                            <div>{MenuCategoryData[x[1].category].items[x[1].subCategory][1]}</div>
                                            <div>{x[1].quantity}</div>
                                        </div>
                                    )
                                })}
                                <hr className={classes.divider}></hr>
                                <div className={classes.tableBottom}>
                                    <div>subtotal</div>
                                    <div>${(state.subTotal).toFixed(2)}</div>
                                </div>
                            </div>

                            <div className={classes.dialogueButtonGroup}>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    window.scrollTo(0, 0);
                                    setBtnOpen(false);
                                    setState({
                                        ...state, currentIndex: 5, dialogueBoxOpen: false,
                                    })
                                }} className={classes.dialogueButton}>view cart</button>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    window.scrollTo(0, 0);
                                    setBtnOpen(false);
                                    setState({
                                        ...state, currentIndex: 6, dialogueBoxOpen: false,
                                    })
                                }} className={classes.dialogueButton}>check out</button>
                            </div>
                        </div>
                        {/* } */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav; 
