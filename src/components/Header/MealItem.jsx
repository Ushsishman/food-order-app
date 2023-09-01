/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  incrementFoodQuantity,
  decrementFoodQuantity,
} from "../../features/foodSlice";

const MealItem = ({ Name, Price, Quantity, id }) => {
  const dispatch = useDispatch();
  const totalPrice = Price * Quantity;
  {
    /* EVERY MEAL ORDERED IN MODAL */
  }
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-[#967468]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-xl font-bold text-[#333233]">{Name}</h1>
        </div>
        <div className="flex flex-row justify-between w-32 items-center mb-2.5">
          <p className="text-sm font-extrabold text-[#A76C5D]">
            $
            {totalPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm font-bold text-[#333233] border py-0.5 px-2.5 rounded">
            x{Quantity}
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        {/* THIS BUTTON DECREMENTS FOOD QUANTITY,IF ITS 0,IT AUTOMATICALLY DELETES FOOD FROM ARRAY */}
        <button
          onClick={() => dispatch(decrementFoodQuantity({ id }))}
          className="px-4 mr-1 border rounded-md border-[#967468] text-[#967468] font-bold text-xl hover:bg-[#792609] hover:text-white">
          -
        </button>
        {/* THIS BUTTON INCREASES FOOD QUANTITY,YOU CAN INCREASE MAX 10 FOOD */}
        <button
          onClick={() => dispatch(incrementFoodQuantity({ id }))}
          className="px-3 ml-1 border rounded-md border-[#967468] text-[#967468] font-bold text-xl hover:bg-[#792609] hover:text-white">
          +
        </button>
      </div>
    </div>
  );
};
export default MealItem;
