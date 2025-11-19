import { useState } from 'react';
import { FileText, Map, Package } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

interface LogEntry {
  time: string;
  message: string;
  type: 'info' | 'warning' | 'error';
}

interface RightPanelProps {
  logs?: LogEntry[];
}

const defaultLogs: LogEntry[] = [
  { time: '14:23', message: 'Power fluctuation detected in sector 7', type: 'warning' },
  { time: '14:18', message: 'Engineer Kane accessed terminal A3', type: 'info' },
  { time: '14:12', message: 'CRITICAL: Main power circuit overload', type: 'error' },
  { time: '14:05', message: 'Oxygen levels decreasing', type: 'warning' },
  { time: '13:58', message: 'Navigation system offline', type: 'error' },
];

export default function RightPanel({ logs = defaultLogs }: RightPanelProps) {
  const [activeTab, setActiveTab] = useState('log');

  return (
    <div className="w-64 bg-card border-l-2 border-primary flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="bg-secondary border-b-2 border-border grid w-full grid-cols-3 rounded-none">
          <TabsTrigger 
            value="log" 
            data-testid="tab-log"
            className="data-[state=active]:bg-card data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
          >
            <FileText size={16} className="mr-1" />
            LOG
          </TabsTrigger>
          <TabsTrigger 
            value="map" 
            data-testid="tab-map"
            className="data-[state=active]:bg-card data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
          >
            <Map size={16} className="mr-1" />
            MAP
          </TabsTrigger>
          <TabsTrigger 
            value="inventory" 
            data-testid="tab-inventory"
            className="data-[state=active]:bg-card data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
          >
            <Package size={16} className="mr-1" />
            INV
          </TabsTrigger>
        </TabsList>

        <TabsContent value="log" className="flex-1 overflow-y-auto p-3 space-y-2 mt-0">
          <h3 className="text-primary font-bold text-sm mb-2">SYSTEM LOG</h3>
          {logs.map((log, idx) => (
            <Card 
              key={idx} 
              className={`p-2 text-xs border-l-4 ${
                log.type === 'error' ? 'border-l-red-400 bg-red-900/20' :
                log.type === 'warning' ? 'border-l-yellow-400 bg-yellow-900/20' :
                'border-l-primary bg-primary/10'
              }`}
              data-testid={`log-entry-${idx}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground">{log.time}</span>
                <span className={`font-bold ${
                  log.type === 'error' ? 'text-red-400' :
                  log.type === 'warning' ? 'text-yellow-400' :
                  'text-primary'
                }`}>
                  {log.type.toUpperCase()}
                </span>
              </div>
              <p className="text-foreground">{log.message}</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="map" className="flex-1 overflow-y-auto p-3 mt-0">
          <h3 className="text-primary font-bold text-sm mb-2">STATION MAP</h3>
          <Card className="p-4 bg-secondary">
            <div className="aspect-square bg-background rounded border-2 border-primary flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Map size={48} className="mx-auto mb-2 text-primary" />
                <p className="text-xs">Engineering Bay</p>
                <p className="text-xs text-muted-foreground mt-2">Level 1</p>
              </div>
            </div>
          </Card>
          <div className="mt-4 space-y-2 text-xs">
            <Card className="p-2 border-l-4 border-l-green-400">
              <p className="text-foreground">🚪 Crew Quarters - Unlocked</p>
            </Card>
            <Card className="p-2 border-l-4 border-l-red-400">
              <p className="text-foreground">🔒 Life Support - Locked</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="flex-1 overflow-y-auto p-3 mt-0">
          <h3 className="text-primary font-bold text-sm mb-2">INVENTORY</h3>
          <div className="space-y-2">
            <Card className="p-3 hover-elevate cursor-pointer" data-testid="item-multitool">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🔧</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">Multitool</p>
                  <p className="text-xs text-muted-foreground">Standard issue repair tool</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 hover-elevate cursor-pointer" data-testid="item-tablet">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">Diagnostic Tablet</p>
                  <p className="text-xs text-muted-foreground">For system analysis</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 hover-elevate cursor-pointer" data-testid="item-keycard">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🔑</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">Access Keycard</p>
                  <p className="text-xs text-muted-foreground">Level 2 clearance</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
