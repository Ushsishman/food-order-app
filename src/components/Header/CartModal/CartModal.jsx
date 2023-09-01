import Modal from "react-modal";
import { useState } from "react";
import MealItem from "../MealItem";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CartBottom from "./CartBottom";

{
  /* MODAL STYLES */
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CartModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const foods = useSelector((state) => state.foods);
  {
    /* TOTAL BILL */
  }
  const total = foods.reduce(
    (total, item) => total + item.Quantity * item.Price,
    0,
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  {
    /* CART MODAL IN HEADER */
  }
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        className="flex flex-row items-center font-semibold py-2 rounded-full bg-[#3F1605] cursor-pointer"
        onClick={() => openModal()}>
        <p className="mx-8">Your Cart</p>
        <p className="bg-[#8C3218] py-1 px-4 mx-8 rounded-full">
          {foods.length}
        </p>
      </motion.div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col h-56 w-96 justify-between">
          {foods.length > 0 ? (
            <div>
              {foods.map((food) => (
                <MealItem
                  key={food.id}
                  id={food.id}
                  Name={food.Name}
                  Price={food.Price}
                  Quantity={food.Quantity}
                />
              ))}
            </div>
          ) : (
            <p>No food ordered.</p>
          )}
          {/* TOTAL PRICE AND BUTTONS */}
          <CartBottom total={total} closeModal={closeModal} />
        </motion.div>
      </Modal>
    </div>
  );
};
export default CartModal;
