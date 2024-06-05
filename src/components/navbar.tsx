const Navbar = () => {
  return (
    <nav className="grid grid-cols-2 sticky top-0 z-50 h-20 w-full border-gray-200 bg-white shadow-md">
      <div className="justify-self-center md:justify-self-auto md:ml-20 self-center">
        <p className="text-3xl">CountryDex</p>
      </div>
    </nav>
  );
};

export default Navbar;
