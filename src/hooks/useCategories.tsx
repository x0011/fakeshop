import { useState, useEffect } from "react";
import { ICategory } from "../models/models";
import { ProductService } from "../services/remote/ProductService";

export function useCategories(){
  const [data, setData] = useState<ICategory[]>([]);
  const [status, setStatus] = useState(false);
  async function getData(){
    setStatus(false);
    const data = new ProductService().getAllCategories();
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