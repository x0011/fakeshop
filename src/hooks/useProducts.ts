import { useState, useEffect } from "react";
import { IProduct } from "../models/models";
import { ProductService } from "../services/remote/ProductService";

export function useProducts(){
  const [data, setData] = useState<IProduct[]>([]);
  const [status, setStatus] = useState(false);
  async function getData(){
    setStatus(false);
    const data = new ProductService().getAllProducts();
    data.then(data => {
      setData(data);
      setStatus(true);
    });
  }
  useEffect(()=>{
    getData();
  }, []);
  
  return {data, status};
}