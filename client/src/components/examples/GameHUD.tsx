import GameHUD from '../GameHUD';

export default function GameHUDExample() {
  return (
    <div className="w-full">
      <GameHUD 
        onMenu={() => console.log('Back to menu')}
        location="ENGINEERING BAY - LEVEL 1"
        health={85}
        oxygen={62}
      />
    </div>
  );
}
