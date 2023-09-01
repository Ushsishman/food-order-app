/* eslint-disable react/prop-types */
const CartBottom = ({ total, closeModal }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-lg">
        <p className="font-bold">Total Amount</p>
        <p className="font-extrabold">
          $
          {total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex flex-row justify-end items-center my-2">
        <button
          onClick={closeModal}
          className="py-1 px-6 border border-red-600 rounded-full mr-3">
          Close
        </button>
        <button className="py-1 px-6 bg-red-600 rounded-full text-white">
          Order
        </button>
      </div>
    </div>
  );
};

export default CartBottom;
