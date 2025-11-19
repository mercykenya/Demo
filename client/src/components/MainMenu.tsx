import Starfield from './Starfield';
import { Button } from '@/components/ui/button';

interface MainMenuProps {
  onStart: () => void;
  onContinue?: () => void;
  onSettings?: () => void;
}

export default function MainMenu({ onStart, onContinue, onSettings }: MainMenuProps) {
  return (
    <div className="relative w-full max-w-4xl h-[700px] bg-gradient-to-b from-indigo-950 via-purple-950 to-black rounded-lg border-2 border-primary overflow-hidden">
      <Starfield count={80} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-12 px-8">
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-wider">
            DEBUGGING IN SPACE
          </h1>
          <p className="text-primary text-2xl tracking-widest font-bold">STATION AURORA</p>
          <p className="text-muted-foreground text-sm tracking-wide max-w-md mx-auto">
            Navigate the depths of space while solving critical debugging challenges aboard the Aurora research station
          </p>
        </div>

        <div className="flex flex-col gap-4 w-72">
          <Button
            onClick={onStart}
            data-testid="button-new-game"
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary-border font-bold text-lg tracking-wide"
          >
            NEW GAME
          </Button>
          <Button
            onClick={onContinue}
            data-testid="button-continue"
            variant="secondary"
            size="lg"
            className="font-bold text-lg tracking-wide"
          >
            CONTINUE
          </Button>
          <Button
            onClick={onSettings}
            data-testid="button-settings"
            variant="outline"
            size="lg"
            className="font-bold text-lg tracking-wide"
          >
            SETTINGS
          </Button>
        </div>
      </div>
    </div>
  );
}
