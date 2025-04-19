

import { Sun, Moon } from "lucide-react";
import { useCallback } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>; 
}

function Header({ darkMode, setDarkMode }: HeaderProps) {

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  return (
    <div className="mb-8 flex justify-between items-center">
      <button
        onClick={toggleDarkMode}
        className={`flex items-center ms-auto gap-2 rounded-lg text-sm font-medium ${
          darkMode ? "text-gray-200" : "text-[#1c1c1d]"
        }`}
      >
        {darkMode ? <Sun size={30} /> : <Moon size={30} />}
      </button>
    </div>
  );
}

export default Header;

