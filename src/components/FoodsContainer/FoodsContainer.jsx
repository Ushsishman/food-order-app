import FoodItem from "./FoodItem";
import Foods from "../../Foods";
import { motion } from "framer-motion";
{
  /* MAIN CONTAINER THAT YOU CAN ORDER FOOD */
}
const FoodsContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      className="w-2/3 min-h-44 my-10 px-8  flex flex-col items-center justify-between bg-[#FFFDFF] rounded-xl">
      {Foods.map((food) => (
        <FoodItem
          key={food.foodId}
          id={food.foodId}
          Name={food.foodName}
          Explanation={food.foodExplanation}
          Price={food.foodPrice}
        />
      ))}
    </motion.div>
  );
};
export default FoodsContainer;
