import { AlertTriangle } from 'lucide-react';
import Starfield from './Starfield';
import { Button } from '@/components/ui/button';

interface MainMenuProps {
  onStart: () => void;
  onContinue?: () => void;
  onSettings?: () => void;
}

export default function MainMenu({ onStart, onContinue, onSettings }: MainMenuProps) {
  return (
    <div className="relative w-full max-w-4xl h-[600px] bg-gradient-to-b from-indigo-950 via-purple-950 to-black rounded-lg border-2 border-primary shadow-2xl overflow-hidden">
      <Starfield count={50} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-wider animate-pulse">
            DEBUGGING IN SPACE
          </h1>
          <p className="text-primary text-xl tracking-widest">STATION AURORA</p>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <AlertTriangle size={20} />
            <p className="text-sm">CRITICAL SYSTEMS FAILURE</p>
            <AlertTriangle size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-64">
          <Button
            onClick={onStart}
            data-testid="button-new-game"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-6 px-8 rounded-lg border-2 border-cyan-400 shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            NEW GAME
          </Button>
          <Button
            onClick={onContinue}
            data-testid="button-continue"
            variant="secondary"
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-bold py-6 px-8 rounded-lg border-2 border-border shadow-lg transition-all"
          >
            CONTINUE
          </Button>
          <Button
            onClick={onSettings}
            data-testid="button-settings"
            variant="secondary"
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-bold py-6 px-8 rounded-lg border-2 border-border shadow-lg transition-all"
          >
            SETTINGS
          </Button>
        </div>

        <p className="text-muted-foreground text-sm absolute bottom-4">
          CS309 | Johnston Liu, Mercy Omwoyo, Sarang Joshi
        </p>
      </div>
    </div>
  );
}
