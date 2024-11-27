import { Container } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import Hearder from "./components/Hearder";
import Category from "./components/Category";
import Cardd from "./components/Cardd";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  const filterByCategory = (cat)=> {
    if (cat === "الكل"){
      setItemsData(items)
    }else {
      const nemArray = items.filter((item)=> item.category === cat)
      setItemsData(nemArray)
    }
  }



  const filterBySearch = (word)=> {
    if (word !== ""){
 
      const nemArray = items.filter((item)=> item.title === word)
      setItemsData(nemArray)
    }
  }

  return (
    <>
      <Navbar filterBySearch={filterBySearch} />

      <Container>
        <Hearder  />
        <Category filterByCategory={filterByCategory} />
        <Cardd itemsData={itemsData} />
      </Container>
    </>
  );
}

export default App;
