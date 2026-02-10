import MobileMenu from "./MobileMenu";
const HeaderSection = () => {
  return (
    <>
      <header className="relative top-6">
        <div className="flex justify-between items-center py-2">
          <div className="logo text-2xl font-semibold">Rizwan</div>
          <nav className="hidden sm:block">
            <ul className="flex flex-row gap-4 *:font-heading *:text-xl *:font-medium">
              <li>Works</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
