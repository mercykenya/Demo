import MainMenu from '../MainMenu';

export default function MainMenuExample() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-4">
      <MainMenu 
        onStart={() => console.log('Start game clicked')}
        onContinue={() => console.log('Continue clicked')}
        onSettings={() => console.log('Settings clicked')}
      />
    </div>
  );
}
