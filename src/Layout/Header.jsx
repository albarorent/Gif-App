import { TbLetterGSmall } from "react-icons/tb";

function Header() {
  return (
    <header>
      <h1 className="text-xl px-28 py-8 flex items-center">
        <span>
          <TbLetterGSmall className="text-7xl" />
        </span>
        Gif Expert App
      </h1>
    </header>
  );
}

export default Header;
