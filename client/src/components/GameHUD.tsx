import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameHUDProps {
  onMenu: () => void;
  location?: string;
  health?: number;
  oxygen?: number;
}

export default function GameHUD({ 
  onMenu, 
  location = "ENGINEERING BAY - LEVEL 1",
  health = 85,
  oxygen = 62
}: GameHUDProps) {
  return (
    <div className="bg-card border-b-2 border-primary p-3 flex items-center justify-between">
      <Button
        onClick={onMenu}
        data-testid="button-main-menu"
        variant="ghost"
        className="text-primary hover:text-primary/80 text-sm font-bold"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        MAIN MENU
      </Button>
      
      <div className="text-primary text-lg font-bold tracking-wider">{location}</div>
      
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-green-400 text-sm font-bold">HEALTH</span>
          <div className="w-32 h-5 bg-secondary rounded border border-green-400">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded transition-all" 
              style={{ width: `${health}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-primary text-sm font-bold">O₂</span>
          <div className="w-32 h-5 bg-secondary rounded border border-primary">
            <div 
              className={`h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded transition-all ${oxygen < 30 ? 'animate-pulse' : ''}`}
              style={{ width: `${oxygen}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
