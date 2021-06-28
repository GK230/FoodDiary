import { useState } from "react";
import FoodItem from "./components/FoodItem";
import FoodFacts from "./components/FoodFacts";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  const [foodItems, setFoodItems] = useState([
    "Alpen sugar-free",
    "Whole milk",
    "Orange juice",
  ]);

  return (
    <>
      <Form>
        <Input required name="food" type="text" placeholder="enter food..." />
        <Input required name="amount" type="number" min="0" placeholder="enter amount: g/ml..." />
        <Button>Add food</Button>
      </Form>
      {/* <FoodItem />; */}
      {/* <FoodFacts />; */}
    </>
  );
}

export default App;
