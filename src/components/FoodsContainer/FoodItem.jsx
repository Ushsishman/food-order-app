/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFood } from "../../features/foodSlice";

const FoodItem = ({ Name, Explanation, Price }) => {
  const [inputVal, setInputVal] = useState(1);
  const dispatch = useDispatch();
  {
    /* ADD FOODS TO ARRAY */
  }
  const inputHandler = () => {
    dispatch(
      addNewFood({
        id: Math.floor(Math.random() * 9999),
        Name,
        Explanation,
        Price,
        Quantity: inputVal,
      }),
    );
  };
  {
    /* EVERY FOOD IN THAT MAIN CONTAINER */
  }
  return (
    <div className="w-full flex flex-row justify-between border-b-2 py-4">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">{Name}</h1>
        <p className="font-semibold italic">{Explanation}</p>
        <p className="font-extrabold text-lg text-[#AA6D40]">${Price}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center mb-2">
          <h2 className="font-extrabold mr-4">Amount</h2>
          <input
            min="1"
            max="10"
            className="border-2 w-12 pl-1 font-semibold rounded"
            type="number"
            value={inputVal}
            onChange={(e) => {
              const inputNumber = parseInt(e.target.value);
              setInputVal(inputNumber);
            }}
          />
        </div>
        <button
          onClick={inputHandler}
          className="py-1 px-2 bg-[#7F2607] text-[#F0DCD8] font-bold rounded-full hover:bg-[#5B1C05]">
          + Add
        </button>
      </div>
    </div>
  );
};
export default FoodItem;

{
  /*
   */
}
