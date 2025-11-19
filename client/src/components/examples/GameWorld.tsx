import GameWorld from '../GameWorld';

export default function GameWorldExample() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-4">
      <GameWorld onMenu={() => console.log('Back to menu')} />
    </div>
  );
}
