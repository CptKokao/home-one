import { useEffect } from "react";
import Goods from "../components/goods/goods";

const Index = () => {

  useEffect( () => {
    const body = document.querySelector("body");
    document.body.classList.add("goods-bg");
    return () => {
      body.classList.remove("goods-bg");
    }
  } );

  return (
    <Goods />
  )
}

export default Index;