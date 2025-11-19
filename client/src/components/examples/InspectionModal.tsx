import { useState } from 'react';
import InspectionModal from '../InspectionModal';
import { Button } from '@/components/ui/button';

export default function InspectionModalExample() {
  const [showModal, setShowModal] = useState(true);
  
  const sampleObject = {
    icon: '⚡',
    label: 'Circuit Breaker',
    status: 'critical',
    type: 'panel'
  };

  return (
    <div className="relative w-full h-96 bg-background flex items-center justify-center">
      <Button onClick={() => setShowModal(true)}>Show Inspection Modal</Button>
      {showModal && (
        <InspectionModal 
          object={sampleObject}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
