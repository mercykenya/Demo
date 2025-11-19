import { useState, useEffect } from 'react';

interface GameObject {
  id: number;
  x: number;
  y: number;
  type: string;
  icon: string;
  label: string;
  status: 'critical' | 'warning' | 'active' | 'inactive';
  color: 'red' | 'yellow' | 'green' | 'gray';
}

interface Door {
  id: string;
  x: number;
  y: number;
  label: string;
  locked: boolean;
}

interface GameMapProps {
  objects?: GameObject[];
  doors?: Door[];
  onObjectInspect?: (obj: GameObject) => void;
  playerPosition?: { x: number; y: number };
  onPlayerMove?: (pos: { x: number; y: number }) => void;
}

const defaultObjects: GameObject[] = [
  { id: 1, x: 180, y: 200, type: 'panel', icon: '⚡', label: 'Circuit Breaker', status: 'critical', color: 'red' },
  { id: 2, x: 450, y: 180, type: 'switch', icon: '🔌', label: 'Power Switch A7', status: 'warning', color: 'yellow' },
  { id: 3, x: 650, y: 240, type: 'terminal', icon: '💻', label: 'Diagnostic Terminal', status: 'active', color: 'green' },
  { id: 4, x: 300, y: 450, type: 'vent', icon: '🌀', label: 'Air Vent Control', status: 'warning', color: 'yellow' },
  { id: 5, x: 550, y: 400, type: 'locker', icon: '📦', label: 'Equipment Storage', status: 'inactive', color: 'gray' },
];

const defaultDoors: Door[] = [
  { id: 'd1', x: 380, y: 120, label: 'To Life Support', locked: true },
  { id: 'd2', x: 100, y: 300, label: 'To Crew Quarters', locked: false },
];

export default function GameMap({ 
  objects = defaultObjects,
  doors = defaultDoors,
  onObjectInspect,
  playerPosition: externalPlayerPos,
  onPlayerMove
}: GameMapProps) {
  const [internalPlayerPos, setInternalPlayerPos] = useState({ x: 400, y: 350 });
  const [nearbyObject, setNearbyObject] = useState<GameObject | null>(null);

  const playerPos = externalPlayerPos || internalPlayerPos;

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPos = { x, y };
    
    if (onPlayerMove) {
      onPlayerMove(newPos);
    } else {
      setInternalPlayerPos(newPos);
    }
  };

  useEffect(() => {
    let closest: GameObject | null = null;
    let minDist = Infinity;

    objects.forEach(obj => {
      const dist = Math.sqrt(Math.pow(playerPos.x - obj.x, 2) + Math.pow(playerPos.y - obj.y, 2));
      if (dist < 80 && dist < minDist) {
        minDist = dist;
        closest = obj;
      }
    });

    setNearbyObject(closest);
  }, [playerPos, objects]);

  const statusColors = {
    red: 'border-red-500 bg-red-900/40 shadow-red-500/50',
    yellow: 'border-yellow-500 bg-yellow-900/40 shadow-yellow-500/50',
    green: 'border-green-500 bg-green-900/40 shadow-green-500/50',
    gray: 'border-border bg-secondary/40',
  };

  return (
    <div className="flex-1 relative bg-card">
      <div 
        className="absolute inset-0 cursor-crosshair overflow-hidden"
        onClick={handleMapClick}
        data-testid="game-map"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 200, 200, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 200, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      >
        <div className="absolute inset-4 border-4 border-border rounded-lg bg-background/50">
          <div className="absolute top-1/3 left-0 right-0 h-1 bg-border"></div>
          <div className="absolute top-0 bottom-1/3 left-1/2 w-1 bg-border"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #00ffff 35px, #00ffff 36px)',
          }}></div>
        </div>

        {doors.map(door => (
          <div key={door.id} className="absolute" style={{ left: door.x, top: door.y }} data-testid={`door-${door.id}`}>
            <div className={`w-16 h-4 rounded ${door.locked ? 'bg-red-600' : 'bg-green-600'} border-2 border-border flex items-center justify-center text-xs font-bold text-white`}>
              {door.locked ? '🔒' : '🚪'}
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
              {door.label}
            </div>
          </div>
        ))}

        {objects.map(obj => {
          const isNear = nearbyObject?.id === obj.id;

          return (
            <div key={obj.id} className="absolute transition-all" style={{ left: obj.x - 25, top: obj.y - 25 }} data-testid={`object-${obj.id}`}>
              <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-2xl cursor-pointer transition-all ${
                statusColors[obj.color]
              } ${isNear ? 'scale-125 shadow-lg animate-pulse' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isNear && onObjectInspect) onObjectInspect(obj);
                }}
              >
                {obj.icon}
              </div>

              {obj.status !== 'inactive' && (
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                  obj.status === 'critical' ? 'bg-red-500 animate-ping' :
                  obj.status === 'warning' ? 'bg-yellow-500 animate-pulse' :
                  'bg-green-500'
                }`}></div>
              )}

              {isNear && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background border-2 border-primary px-3 py-1 rounded text-xs whitespace-nowrap text-primary font-bold animate-fade-in">
                  {obj.label}
                  <div className="text-yellow-400 text-center mt-1">Click to inspect</div>
                </div>
              )}
            </div>
          );
        })}

        <div
          className="absolute transition-all duration-300 ease-out"
          style={{ 
            left: playerPos.x - 20, 
            top: playerPos.y - 30,
            transitionProperty: 'left, top'
          }}
          data-testid="player-character"
        >
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/40 rounded-full blur-sm"></div>
            <div className="relative text-4xl filter drop-shadow-lg">
              🧑‍🚀
            </div>
            {nearbyObject && (
              <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping"></div>
            )}
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary px-2 py-0.5 rounded text-xs text-primary-foreground font-bold whitespace-nowrap">
            Engineer Kane
          </div>
        </div>
      </div>
    </div>
  );
}
