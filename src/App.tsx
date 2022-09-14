import React from 'react';
import { Products } from './components/products/Products';
import { Container, Row } from 'react-bootstrap'
import { DropdownCats } from './components/header/DropdownCats';
import { TopNavbar } from './components/navbar/TopNavbar';
import { CurrentCategoryTitle } from './components/CurrentCategoryTitle/CurrentCategoryTitle';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Container fluid="sm md xs">
        <div className='mb-3'>
          <CurrentCategoryTitle />
        </div>
        <DropdownCats />
        <Row>
          <Products subscribe={true} like={true} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
