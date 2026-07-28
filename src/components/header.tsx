import { useShowStore } from '@/store/show-form';
import { useThemeStore } from '@/store/theme';
import { BookmarkIcon, PlusIcon, ThemeIcon } from './ui/svg-icons';

export default function Header() {
  const { showForm } = useShowStore();
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="p-4 bg-neutral-50 dark:bg-neutral-950 dark:text-white sticky top-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* First Block */}
        <div className="flex items-center gap-2">
          <BookmarkIcon />
          <span className="font-bold hidden md:block">Bookmark Manager</span>
        </div>

        {/* Second Block */}
        <div className="flex items-center gap-4">
          {/* <!-- From Uiverse.io by Ariful2634 -->  */}
          <button
            className="text-xl p-2 rounded bg-[rgba(39,63,79,.9)] text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
            onClick={showForm}>
            <span className="absolute bg-[rgba(39,63,79,.96)] w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[rgba(39,63,79,1)] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            <PlusIcon />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Change the theme">
            <ThemeIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
