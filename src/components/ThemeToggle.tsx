
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
        theme === 'dark' 
          ? "bg-secondary text-primary" 
          : "bg-secondary text-primary",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="animate-fadeIn" />
      ) : (
        <Moon size={18} className="animate-fadeIn" />
      )}
    </button>
  );
};
