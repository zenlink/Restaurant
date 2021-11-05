import React, { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from "../AppContext";
import { MenuCategoryData } from "./MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgHome1 from "../img/imgHome/imgHome1.jpg";
import imgHome2 from "../img/imgHome/imgHome2.jpg";
import imgHome3 from "../img/imgHome/imgHome3.jpg";

import { FaChevronLeft, FaChevronRight, FaGift, FaRegIdBadge } from "react-icons/fa"

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
const favoriteBtn = {
    position: "absolute",
    color: "#fff",
    textDecoration: "none",
    fontSize: "2rem",
    background: "rgba(192,192,192, 0.4)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    padding: "10px",
    textAlign: "center",
    transform: "translateY(-50%)",
    top: "50%",
    zIndex: 1,
    outline: "none",
    border: 0,
    cursor: "pointer",
    "&:hover": {
        background:  "rgba(192,192,192, 0.9)", 
        boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", 
    }, 
};
const giftCardTitleGeneral = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "upperCase",
    textAlign:'center',
    height: "100%",
    color: "#376037",   
};

const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
        opacity: "0.6",
        zIndex: "-1",
    },
    image: {
        width: '80%',

    },
    main: {
        width: "80%",
        margin: "0 auto",
       
    },
    titleGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#376037",
        textAlign: "center",
        textTransform: "upperCase",
        height: "100vh", 
        minHeight: "50rem", 
    },
    chinesePoem: {
        fontSize: "2.5rem",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        lineHeight: "4rem",
        fontWeight: "bold",
        color: "#376037",
        fontFamily: "Handlee, cursive",
    },

   
    topic: {
        padding: "2rem 0"
    },
    title: {
        padding: "1.5rem 0",
        fontSize: "3.5rem",
        color: "#683476",
        letterSpacing: "3px",
    },
    address: {
        // padding: "2rem 0",
    },
    orderButton: {
        ...button,
        padding: "1rem 2rem",
        fontSize: "1.5rem",
    },
    favorite: {
        textAlign: "center",
        textTransform: "upperCase",
        color: "#683476",
        margin: "2rem",
        letterSpacing: "3px",
    },
    wrapperContainer: {
        margin: "0 2rem",
        overflow: "hidden",
    },

    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 100%)",
        scrollBehavior: "smooth",
        textAlign: "center",
        transition: 'transform 1s',

    },
    section: {
        position: "relative",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
        margin: "20px 0",
        padding: "0 5px",
    },
    // item: {
    //     display: "grid",
    //     gridTemplateRows: "60% 17% 10% 10%",
    //     alignItems: "center",
    //     background: "rgba(255,255,255, .7)",
    //     borderRadius: "10px",
    //     color: "#376037",
    // },
    item: {
        display: "flex",
        flexFlow: "column",
        background: "rgba(255,255,255, .7)",
        borderRadius: "10px",
        color: "#376037",
    }, 
    btnLeft: {
        ...favoriteBtn,
        left: 0,  
    },
    btnRight: {
        ...favoriteBtn,
        right: 0,
    },
    favoriteImage: {
        width: "100%",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "10px",
        margin: "1rem 0",
        cursor: "pointer", 
        "&:hover": {
            transform: "scale(1.2)",
            transition: "0.5s linear",
        }, 
    },

    name: {
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
        marginTop: "auto",
        justifySelf: "center",
    },
    contentsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 50%)",
        gridTemplateRows: "repeat(3, minmax(200px,400px))",
        margin: "2rem 0",
        // minHeight: "100rem", 
        // gridColumnGap: "5px",
        // gridRowGap: "2rem",
        // background: "#ececec",

    },

    giftCardTitle: {
        background: "rgba(243,241,239, .6)",
       
        ...giftCardTitleGeneral,
    },
    subject:{
        padding: "15px 0",
    }, 
    giftCardImage: {
        background: "#3EAD98",
        height: "100%",
        backgroundImage: `url(${imgHome2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // zIndex: "-1",      
    },
    giftIcon: {
        color: "red",
        fontSize: "5rem",
        zIndex: 1,
    },
    card: {
        border: "1px solid",
    },
    contactContainer: {
        background: "rgba(240, 191, 191, 0.3)",
        gridColumn: "1/3",
        ...giftCardTitleGeneral,
    },
    eventImage: {
        // background: "#3EAD98",
        // height: "100%",
        // backgroundImage: `url(${imgHome2})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundImage: `url(${imgHome3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: "100%",
    },
    eventContainer: {
        background: "rgba(243,241,239, .6)",
        ...giftCardTitleGeneral,
    },
    "@media screen and (max-width: 1000px)": {
        titleGroup: {
            minHeight: "56rem", 
        },
    },
    "@media screen and (max-width: 768px)": {

        image: {
            width: '100%',
            objectFit: "cover",
            objectPosition: "right",
        },
        main: {
            width: "100%",
        },
        titleGroup: {
            minHeight: "35rem", 
        },
        chinesePoem: {
            fontSize: "1.2rem",
            lineHeight: "2rem",
            fontWeight: "bold",
        },
        title: {
            padding: "1rem 0",
            fontSize: "1.5rem",
        },
        subTitle: {
            fontSize: "1rem",
        },
        address: {
            fontSize: ".8rem",
        },
        orderButton: {
            padding: "1rem 2rem",
            fontSize: "1rem",
        },
        favorite: {
            fontSize: "1.2rem",
        },
        wrapperContainer: {
            margin: "0",
        },
        section: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            // margin: "2rem .5rem", 
            gridGap: ".5rem",
        },
        favoriteImage: {
            margin: "0.2rem 0",
        },
        name: {
            padding: "0",
            fontSize: "1rem",
            textTransform: "capitalize", 
        },
        price: {
            fontSize: "1rem",
        },
        addToCartButton: {
            padding: "0.4rem .9rem",
            fontSize: ".8rem",
        },
        orderButton: {
            padding: "1rem 2rem",
            fontSize: "1rem",
        },
        contentsContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(1, 100%)",
            gridTemplateRows: "repeat(5, minmax(120px,35vh))",
           
        },
        mainSubject:{
            fontSize: "1.2rem",
        }, 
        subject:{
            padding: "5px 0",
            fontSize: "0.8rem", 
        }, 
        giftCardTitle: {
            gridColumn: "1/2",
            gridRow: "2/3"
        },
        giftCardImage: {
            gridColumn: "1/3",
            gridRow: "1/2"
        },
        contactContainer: {
            gridColumn: "1/3",
            gridRow: "3/4"
        },
        eventImage: {
            gridColumn: "1/3",
            gridRow: "4/5",
            backgroundPosition: "center", 
            
        },
        eventContainer: {
            gridColumn: "1/3",
            gridRow: "5/6",
        },

    }

}));

const favoriteArrIndex = [
    [0, 0], [1, 2], [2, 4], [2, 5], [3, 1], [4, 7], [5, 1], [6, 2]
];
let itemWidth;
const Home = () => {
    const [state, setState] = useContext(AppContext);
    const [index, setIndex] = useState(0);
    const trackRef = useRef(null);
    const classes = useStyles();

    const heightStyle = { height: window.innerHeight };

    const getWidth = () => {
        if (trackRef.current != null) {
            itemWidth = trackRef.current.getBoundingClientRect().width;
        }
    }

    const loadListener = (e) => {
        getWidth()
    };
    const resizeListener = () => {
        getWidth()

    }
    useEffect(() => {
        window.addEventListener("resize", resizeListener);
        window.addEventListener("load", loadListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
            window.removeEventListener("load", loadListener);
        };
    }, []);

    const handleOrder = (id) => {

        let key = favoriteArrIndex[id][0] + '-' + favoriteArrIndex[id][1];
        let v = state.orderItem[key];
        let qt = 1;
        if (v) {
            qt = qt + v.quantity;
        }
        setState({
            ...state, orderItem: {
                ...state.orderItem, [key]: { category: favoriteArrIndex[id][0], subCategory: favoriteArrIndex[id][1], quantity: qt }
            },
            currentIndex: 0, updateTrigger: !state.updateTrigger, subTotal: state.subTotal, item: (state.item + 1),
            dialogueBoxOpen: true,
        })

    }

    const itemMoving = { transform: `translateX(-${itemWidth * index}px)` };
    const handleButtonForward = () => {
        setIndex(1)
    };
    const handleButtonBackword = () => {
        setIndex(0)
    }


    return (
        <div>
            <div className={classes.background}>
                <img src={imgHome1} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div 
                // style={heightStyle} 
                className={classes.titleGroup}>
                    <div className={classes.chinesePoem}>
                        <div>惠崇春江晚景</div>
                        <div>竹外桃花三兩枝，</div>
                        <div>春江水暖鴨先知。</div>
                        <div>蔞蒿滿地蘆芽短，</div>
                        <div>正是河豚欲上時。</div>
                        <div>宋·蘇軾</div>
                    </div>
                    <div className={classes.topic}>
                        <h1 className={classes.title}>JiangNan Restaurant</h1>
                        <h2 className={classes.subTitle}>authentic chinese cuisine from estern china</h2>
                        <h3 className={classes.address}>7 Lorem Rd., city, state 01234</h3>
                        <h3 className={classes.phone}>P: 123-456-789</h3>
                    </div>
                    <button className={classes.orderButton}
                        onClick={() => {
                            setState({
                                ...state, currentIndex: 1,
                            })
                        }}
                    >
                        Start order
                    </button>
                </div>

                <div>
                    <h1 className={classes.favorite}>JianNan's Favorites</h1>
                    <div className={classes.wrapperContainer}>
                        <div className={classes.wrapper} style={itemMoving}>
                            <div ref={trackRef} className={classes.section}>
                                {favoriteArrIndex.slice(0, 4).map((x, index) => {
                                    return (
                                        <div key = {index} className={classes.item}>
                                            <img src={MenuCategoryData[x[0]].items[x[1]][0]} className={classes.favoriteImage}></img>
                                            <h3 className={classes.name}>{MenuCategoryData[x[0]].items[x[1]][1]}</h3>
                                            <p className={classes.price}>${MenuCategoryData[x[0]].items[x[1]][2]}</p>
                                            <button onClick={(e) => handleOrder(index)}
                                                className={classes.addToCartButton}>add to cart</button>
                                        </div>
                                    )
                                })}
                                <button onClick={handleButtonForward} className={classes.btnRight}><FaChevronRight /></button>
                            </div>
                            <div className={classes.section}>
                                <button onClick={handleButtonBackword} className={classes.btnLeft}><FaChevronLeft /></button>
                                {favoriteArrIndex.slice(4, 8).map((x, index) => {
                                    return (
                                        <div key ={index} className={classes.item}>
                                            <img src={MenuCategoryData[x[0]].items[x[1]][0]} className={classes.favoriteImage}></img>

                                            <h3 className={classes.name}>{MenuCategoryData[x[0]].items[x[1]][1]}</h3>
                                            <p className={classes.price}>${MenuCategoryData[x[0]].items[x[1]][2]}</p>
                                            <button onClick={(e) => handleOrder(index + 4)}
                                                className={classes.addToCartButton}>add to cart</button>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={classes.sliderButton}>
                        </div>
                    </div>
                </div>

                <div className={classes.contentsContainer}>

                    <div className={classes.giftCardTitle}>
                        <h1 className={classes.mainSubject}>purchase a gift card</h1>
                        <p className = {classes.subject}>Purchase a JiangNan Restaurant e-gift card.</p>
                        <button onClick={() => {
                            setState({
                                ...state, currentIndex: 3,
                            })
                        }} className={classes.orderButton}>buy now</button>

                    </div>

                    <div className={classes.giftCardImage}>
                        {/* <FaGift className = "classes.giftIcon"></FaGift>
                           <div className = "classes.card">
                               <h3>JiangNan Restaurant</h3>
                               <h4>$20 A Gift just for you</h4>
                           </div> */}

                    </div>

                    <div className={classes.contactContainer}>
                        <h1 className={classes.mainSubject}>get to know us</h1>
                        <p className = {classes.subject}>Purchase a JiangNan Restaurant e-gift card in any amount.</p>
                        <button onClick={() => {
                            setState({
                                ...state, currentIndex: 4,
                            })
                        }} className={classes.orderButton}>contact</button>
                    </div>


                    <div className={classes.eventImage}>
                    </div>

                    <div className={classes.eventContainer}>
                        <h1 className={classes.mainSubject}>celebrate together during JianNan Restaurant Events</h1>
                        <p className = {classes.subject}>Purchase a JiangNan Restaurant e-gift card in any amount.</p>
                        <button onClick={() => {
                            setState({
                                ...state, currentIndex: 2,
                            })
                        }} className={classes.orderButton}>learn more</button>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home;
