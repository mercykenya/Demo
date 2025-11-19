import GameMap from '../GameMap';

export default function GameMapExample() {
  return (
    <div className="w-full h-[600px] bg-background">
      <GameMap 
        onObjectInspect={(obj) => console.log('Inspect:', obj.label)}
        onPlayerMove={(pos) => console.log('Player moved to:', pos)}
      />
    </div>
  );
}
