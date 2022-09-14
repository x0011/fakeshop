import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useLocalStorage } from "../../hooks/useLocalstorage"
import { useTypedSelector } from "../../hooks/useTypedSelector";


export const CartNavbar: React.FC = () => {
    return (
        <>
            В корзине  <a href="#login">Mark Otto</a>
        </>
    )
}