import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const CurrentCategoryTitle: React.FC = () => {

  const { currentCategory, categories } = useTypedSelector(state => state.categories);

  return <h3>Категория: {categories[currentCategory]}</h3>

}