import './App.css';
import {useState}  from 'react';

const items = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  let fruits = items.map((food, index) =>{
    if(food.category.toLowerCase() === 'fruits'){
      return(
        <li key={index}>
          <p style={food.price === '$2' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
          <span>{food.price}</span>
        </li>  
      );
    }
  });

  let vegetables = items.map((food, index) =>{
    if(food.category.toLowerCase() === 'vegetables'){
      return(
        <li key={index+1}>
          <p style={food.price === '$4' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
          <span>{food.price}</span>
        </li>  
      );
    }
  });

  const [fruitsArr, setItemArr] = useState(fruits);
  const [vegetablesArr, setVegetablesArr] = useState(vegetables);

  function searchFood(e){
    const newArr1 = items.map((food, index) =>{
      if(items[index].name.toLowerCase().includes(e.target.value.toLowerCase()) && food.category.toLowerCase() === 'fruits'){
        return(
          <li key={index}>
            <p style={food.price === '$2' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
            <span>{food.price}</span>
          </li>  
        );
      }
    });
    const newArr2 = items.map((food, index) =>{
      if(items[index].name.toLowerCase().includes(e.target.value.toLowerCase()) && food.category.toLowerCase() === 'vegetables'){
        return(
          <li key={index}>
            <p style={food.price === '$4' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
            <span>{food.price}</span>
          </li>  
        );
      }
    });
    setItemArr(newArr1);
    setVegetablesArr(newArr2);
  }

  function checkInStock(e){
    const newArr1 = items.map((food, index) =>{
      if(food.category.toLowerCase() === 'fruits' && food.stocked === true){
        return(
          <li key={index}>
            <p style={food.price === '$2' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
            <span>{food.price}</span>
          </li>  
        );
      }
    });
    const newArr2 = items.map((food, index) =>{
      if(food.category.toLowerCase() === 'vegetables' && food.stocked === true){
        return(
          <li key={index}>
            <p style={food.price === '$4' ? {color: 'red'} : {color: 'black'} }>{food.name}</p>
            <span>{food.price}</span>
          </li>  
        );
      }
    });
    if(e.target.checked){
      setItemArr(newArr1);
      setVegetablesArr(newArr2);
    }
    else{
      setItemArr(fruits);
      setVegetablesArr(vegetables);
    }
  }

  return (
    <main>
      <h1>Grocery Store</h1>
      <input type='text' placeholder='Search...' className='search-food' onKeyUp={searchFood}></input>
      <div>
        <input type='checkbox' className='checkbox' onChange={checkInStock}></input>
        <span>Only show products in stock</span>
      </div>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      <div id='fruits'>
        <div id='fruits-title'><h2>Fruits</h2></div>
        <ul>{fruitsArr}</ul>
      </div>
      <div id='vegetables'>
        <div id='vegetables-title'><h2>Vegetables</h2></div>
        <ul>{vegetablesArr}</ul>
      </div>
    </main>
  );
}

export default App;
