
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={cn(
      "py-6 border-t border-border transition-colors duration-300",
      theme === 'dark' ? "bg-background" : "bg-background"
    )}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          Developed by Sankha using Lovable &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
