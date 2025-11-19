import { useState } from 'react';
import GameHUD from './GameHUD';
import ObjectivesPanel from './ObjectivesPanel';
import GameMap from './GameMap';
import RightPanel from './RightPanel';
import InspectionModal from './InspectionModal';

interface GameWorldProps {
  onMenu: () => void;
}

export default function GameWorld({ onMenu }: GameWorldProps) {
  const [playerPos, setPlayerPos] = useState({ x: 400, y: 350 });
  const [inspecting, setInspecting] = useState<any>(null);

  return (
    <div className="w-full max-w-7xl h-[800px] bg-background rounded-lg border-2 border-primary shadow-2xl overflow-hidden flex flex-col">
      <GameHUD onMenu={onMenu} health={85} oxygen={62} />
      
      <div className="flex-1 flex overflow-hidden relative">
        <ObjectivesPanel />
        <GameMap 
          playerPosition={playerPos}
          onPlayerMove={setPlayerPos}
          onObjectInspect={setInspecting}
        />
        <RightPanel />
        
        <InspectionModal 
          object={inspecting}
          onClose={() => setInspecting(null)}
        />
      </div>
    </div>
  );
}
