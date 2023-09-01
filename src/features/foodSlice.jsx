import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addNewFood: (state, action) => {
      {
        /* THIS IS USED IN MAIN CONTAINER THAT YOU CAN ORDER FOOD */
      }
      state.push(action.payload);
    },
    incrementFoodQuantity: (state, action) => {
      {
        /* THIS INCREASES FOOD QUANTITY,MAX QUANTITY IS 10 */
      }
      const { id } = action.payload;
      const currentFood = state.find((item) => item.id === id);

      if (currentFood) {
        if (currentFood.Quantity < 10) {
          currentFood.Quantity += 1;
        }
      }
    },
    decrementFoodQuantity: (state, action) => {
      {
        /* THIS DECREASES FOOD QUANTITY,IF ITS 0,IT WILL AUTOMATICALLY DELETE THAT FOOD FROM ARRAY */
      }
      const { id } = action.payload;
      const currentFood = state.find((item) => item.id === id);

      if (currentFood) {
        if (currentFood.Quantity > 1) {
          currentFood.Quantity -= 1;
        } else {
          return state.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addNewFood, incrementFoodQuantity, decrementFoodQuantity } =
  foodSlice.actions;

export default foodSlice.reducer;
