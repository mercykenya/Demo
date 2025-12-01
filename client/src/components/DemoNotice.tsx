import { Info } from 'lucide-react';

export default function DemoNotice() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm border border-blue-400/50 text-blue-100 px-4 py-2 rounded-lg shadow-lg max-w-md text-center">
      <div className="flex items-center justify-center gap-2">
        <Info size={16} />
        <span className="text-sm font-medium">
          🚀 Demo Mode - Fully functional without backend
        </span>
      </div>
      <p className="text-xs mt-1 text-blue-200">
        Explore the space station interface and interact with objects
      </p>
    </div>
  );
}
