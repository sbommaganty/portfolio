import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <span className="sr-only">toggle dark mode</span>
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
