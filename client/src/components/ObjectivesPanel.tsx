import { Activity, AlertTriangle, Zap, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';

interface Objective {
  id: string;
  text: string;
  status: 'active' | 'pending' | 'completed';
}

interface SystemStatus {
  name: string;
  status: 'critical' | 'warning' | 'error' | 'normal';
  icon: 'power' | 'life-support' | 'navigation';
}

interface ObjectivesPanelProps {
  objectives?: Objective[];
  systems?: SystemStatus[];
}

const defaultObjectives: Objective[] = [
  { id: '1', text: 'Restore main power to Engineering Bay', status: 'active' },
  { id: '2', text: 'Fix oxygen circulation systems', status: 'pending' },
  { id: '3', text: 'Repair navigation controls', status: 'pending' },
];

const defaultSystems: SystemStatus[] = [
  { name: 'Power', status: 'critical', icon: 'power' },
  { name: 'Life Support', status: 'warning', icon: 'life-support' },
  { name: 'Navigation', status: 'error', icon: 'navigation' },
];

const statusColors = {
  active: 'bg-yellow-900/30 border-l-4 border-yellow-400',
  pending: 'bg-secondary/50 border-l-4 border-border',
  completed: 'bg-green-900/30 border-l-4 border-green-400',
  critical: 'text-red-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  normal: 'text-green-400',
};

export default function ObjectivesPanel({ 
  objectives = defaultObjectives,
  systems = defaultSystems 
}: ObjectivesPanelProps) {
  const getSystemIcon = (icon: string) => {
    switch(icon) {
      case 'power': return <Zap size={12} />;
      case 'life-support': return <Wind size={12} />;
      case 'navigation': return <Activity size={12} />;
      default: return <Activity size={12} />;
    }
  };

  return (
    <div className="w-56 bg-card border-r-2 border-primary p-3 overflow-y-auto">
      <h3 className="text-primary font-bold text-sm mb-3 flex items-center gap-2">
        <Activity size={16} />
        OBJECTIVES
      </h3>
      
      <div className="space-y-2 text-xs">
        {objectives.map((obj) => (
          <div key={obj.id} className={`p-2 rounded ${statusColors[obj.status]}`} data-testid={`objective-${obj.id}`}>
            {obj.status === 'active' && (
              <div className="flex items-center gap-2 text-yellow-200">
                <AlertTriangle size={14} className="animate-pulse" />
                <span className="font-bold">ACTIVE</span>
              </div>
            )}
            <p className={`${obj.status === 'active' ? 'mt-1 text-foreground' : 'text-muted-foreground'}`}>
              {obj.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="text-primary font-bold text-xs mb-2">SYSTEMS STATUS</h4>
        <div className="space-y-1 text-xs">
          {systems.map((system, idx) => (
            <div key={idx} className="flex items-center gap-2" data-testid={`system-${system.name.toLowerCase().replace(' ', '-')}`}>
              <span className={statusColors[system.status]}>
                {getSystemIcon(system.icon)}
              </span>
              <span className={statusColors[system.status]}>
                {system.name}: {system.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card className="mt-4 p-2 bg-primary/10 border border-primary text-xs">
        <p className="text-primary font-bold mb-1">💡 TIP</p>
        <p className="text-foreground">Click anywhere to move. Get close to objects to interact with them.</p>
      </Card>
    </div>
  );
}
