import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface InspectedObject {
  icon: string;
  label: string;
  status: string;
  type: string;
}

interface InspectionModalProps {
  object: InspectedObject | null;
  onClose: () => void;
}

const getObjectDetails = (obj: InspectedObject) => {
  switch(obj.type) {
    case 'panel':
      return (
        <>
          <p className="text-red-400">⚠ POWER OVERLOAD DETECTED</p>
          <p className="mt-2">Circuit capacity: 100A</p>
          <p>Current draw: 145A</p>
          <p className="mt-2 text-yellow-400">Some circuits may be mislabeled...</p>
        </>
      );
    case 'switch':
      return (
        <>
          <p>Label: "Oxygen Pump A7"</p>
          <p className="mt-2 text-yellow-400">⚠ Connected system mismatch</p>
          <p className="mt-2">Last accessed: Engineer Rodriguez</p>
          <p className="text-xs text-muted-foreground">2025-11-18 08:45</p>
        </>
      );
    case 'terminal':
      return (
        <>
          <p className="text-green-400">✓ SYSTEM OPERATIONAL</p>
          <p className="mt-2">Diagnostic tools available</p>
          <p className="mt-2">Recent scans:</p>
          <p className="text-xs">- Power grid analysis</p>
          <p className="text-xs">- Oxygen flow sensors</p>
        </>
      );
    case 'vent':
      return (
        <>
          <p className="text-yellow-400">⚠ PARTIAL BLOCKAGE</p>
          <p className="mt-2">Flow rate: 68% of normal</p>
          <p className="mt-2">Maintenance required</p>
        </>
      );
    case 'locker':
      return (
        <>
          <p>Contents:</p>
          <p className="mt-2">• Multitool</p>
          <p>• Emergency oxygen canister</p>
          <p>• Diagnostic tablet</p>
        </>
      );
    default:
      return <p>No additional information available.</p>;
  }
};

export default function InspectionModal({ object, onClose }: InspectionModalProps) {
  if (!object) return null;

  const statusColor = 
    object.status === 'critical' ? 'text-red-400' :
    object.status === 'warning' ? 'text-yellow-400' :
    object.status === 'active' ? 'text-green-400' :
    'text-muted-foreground';

  return (
    <div 
      className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
      data-testid="inspection-modal"
    >
      <Card 
        className="bg-card border-4 border-primary rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">{object.icon}</div>
          <div className="flex-1">
            <h3 className="text-primary font-bold text-xl">{object.label}</h3>
            <p className={`text-sm font-bold ${statusColor}`}>
              STATUS: {object.status.toUpperCase()}
            </p>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            data-testid="button-close-inspection"
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={24} />
          </Button>
        </div>

        <div className="bg-background p-4 rounded mb-4 font-mono text-sm text-foreground">
          {getObjectDetails(object)}
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground font-bold"
            data-testid="button-interact"
            onClick={() => console.log('Interact with:', object.label)}
          >
            INTERACT
          </Button>
          <Button 
            variant="secondary"
            onClick={onClose}
            data-testid="button-close"
            className="flex-1 font-bold"
          >
            CLOSE
          </Button>
        </div>
      </Card>
    </div>
  );
}
