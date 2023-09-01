import CartModal from "../components/Header/CartModal/CartModal";

{
  /* HEADER LAYOUT */
}
const Header = () => {
  return (
    <div className="h-28 w-full px-4 sm:px-12 lg:px-24 flex flex-row justify-between items-center text-white bg-[#792609]">
      <h1 className="font-bold text-2xl sm:text-3xl">ReactMeals</h1>
      <CartModal />
    </div>
  );
};

export default Header;
