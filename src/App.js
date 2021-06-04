import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaEraser } from "react-icons/fa";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue
    }

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
  };
  const uploadOnEnter = (e) => {
      if(e.key === "Enter") {
        const newItem = {
          itemName: inputValue
        }

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue("");
      }
    };
  const eraseLine = (index) => {
    // alert('you clicked this button ' + index);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems)
  }

  return (
    <div className="App">
      <div className='app-background'>
        <div className='main-container'>
          <div className='add-item-box'>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='add-item-input'
                placeholder='Add an ingredient...'
                onKeyDown={uploadOnEnter}
            />
            <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
          </div>
          <div className='item-list'>
            {items.map((item, index) =>
                <div className='item-container'>
                  <div className='item-name'>
                          <span>{item.itemName}</span>
                  </div>
                  <div className='eraser'>
                    <FaEraser onClick={() => eraseLine(index)} className="eraserIcon"/>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
