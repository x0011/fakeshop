import { CSSProperties, useEffect } from 'react'
import { Col, Spinner } from 'react-bootstrap';
import { CardItem } from "../cardItem/CardItem";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProducts } from '../../actionCreators/fetchProducts';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface ProductsProps {
  subscribe: boolean,
  like?: boolean,
}

export const Products = ({subscribe, like}:ProductsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {error, loadStatus, products} = useTypedSelector(state => state.products);
  const { categories, currentCategory } = useTypedSelector(state => state.categories);
  
  useEffect(()=> {
    dispatch(fetchProducts());
  }, [])

  useEffect(()=> {  
    dispatch(fetchProducts(categories[currentCategory]));
  }, [currentCategory])

  const spinnerStyles:CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
  }

  return(
    <>
      { 
        loadStatus ?
          products.map( e => 
            <Col key={e.id} md={3} className="mb-2">
              <CardItem key={e.id} product={e} />
            </Col>
            )
        :
          <Spinner animation="border" role="status" style={ spinnerStyles }>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      }
    </>
  )
}