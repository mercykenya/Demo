import { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import GameWorld from '@/components/GameWorld';

export default function Game() {
  const [screen, setScreen] = useState<'menu' | 'game'>('menu');

  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-4">
      {screen === 'menu' ? (
        <MainMenu 
          onStart={() => setScreen('game')}
          onContinue={() => console.log('Continue game')}
          onSettings={() => console.log('Open settings')}
        />
      ) : (
        <GameWorld onMenu={() => setScreen('menu')} />
      )}
    </div>
  );
}
