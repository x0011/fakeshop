import {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { addItemToCart } from "../../actionCreators/cart";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProduct } from "../../models/models";

export interface CardItemProps {
  product: IProduct
}

export const CardItem = ({product}:CardItemProps): JSX.Element => {
  const [showDescr, setShowDescr] = useState(false);
  const dispatch = useAppDispatch();
  const {products: cartItems} = useTypedSelector((state) => state.cart);
  const [ls, setCart] = useLocalStorage('cart');

  const addToCartHandler = (item: IProduct) => {
    dispatch(addItemToCart(item));
    setCart(cartItems);
  }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={ {height: "150px"} } />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        { showDescr && <Card.Text>{product.description}</Card.Text> }
        <Button className="me-2" onClick={() => setShowDescr((prev) => !prev)} variant="outline-primary" size="sm">{showDescr ? 'Скрыть' : 'Показать'} описание</Button>
        <Button onClick={() => addToCartHandler(product)} variant="outline-primary" size="sm">В корзину</Button>
      </Card.Body>
    </Card>
  );
}