import React, { usetState, useContext, useEffect, } from 'react';
import { AppContext } from './AppContext';
import { makeStyles} from '@material-ui/core/styles';
import {MenuCategoryData} from "./components/MenuContext";


const useStyles = makeStyles(theme => ({
    container: {
      width: "100%",
    },
}));
 const Container = () => {
     const [state, setState] = useContext(AppContext);
     const classes = useStyles();

     const getSubtotal = () => {
      let totalAmount = 0;
      let totalItem = 0;
      Object.entries(state.orderItem).forEach((x, index) => {
          totalAmount += x[1].quantity * MenuCategoryData[x[1].category].items[x[1].subCategory][2];
          totalItem += x[1].quantity
      })
  
      setState({ ...state, subTotal: totalAmount, item: totalItem });
      return totalAmount;
  }
  
  const bodyScrollTopListener = ()=>{

    setState((c)=>{ return ({...c, isScrollTop: (document.body.getBoundingClientRect().top===0)? true:false })});
    
  } ;

  const resizeWidthListener = ()=>{
    setState((c)=>{return{...c, windowWidth: window.innerWidth}})
  }
 
  useEffect(()=>{
    window.addEventListener("scroll", bodyScrollTopListener);
    window.addEventListener("resize", resizeWidthListener);
    return()=>{
        window.addEventListener("scroll", bodyScrollTopListener);
        window.addEventListener("resize", resizeWidthListener); 
    }
  }, []);
  useEffect(() => {
    getSubtotal();
}, [state.orderItem])

  const style = {height: state.navTop}
   
    return (
        <div className = {classes.container} >
          {/* <div style ={style}></div> */}
           {state.componentsArr[state.currentIndex]} 
        </div>
    )
}

export default Container;
