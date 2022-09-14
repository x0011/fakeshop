import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchCategories } from "../../actionCreators/fetchCategories";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCategory } from "../../actionCreators/setCategory";
import { CurrentCategoryTitle } from "../CurrentCategoryTitle/CurrentCategoryTitle";

export interface ICategoriesProps {
  cats: string[],
  status: boolean,
  error: string | null,
}

export const DropdownCats: React.FC = () => {

  const dispatch = useAppDispatch();
  const { categories: cats, error, status, currentCategory } = useTypedSelector(state => state.categories);
  useEffect(()=>{
    dispatch(fetchCategories());
  }, []);

  if (error){
    return <p>Сетевая ошибка</p>;
  }

  const setCategoryListener = (event: React.MouseEvent<HTMLElement>, catKey: number) => {
    dispatch(setCategory(catKey));
  }

  return(
    <>
      {
      status ? 
        <Dropdown className="mb-4">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Выбрать категорию
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {cats.map((cat, index) => {
              return (
                <Dropdown.Item onClick={(event) => setCategoryListener(event, index)} key={index} href="#">{`${cat}`}</Dropdown.Item>
                )
              })}
          </Dropdown.Menu>
        </Dropdown>
      :
      <Dropdown>
        <Dropdown.Toggle disabled={true}>
          Загрузка...
        </Dropdown.Toggle>
      </Dropdown>
    }
    </>
  );
}