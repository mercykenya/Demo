import Starfield from '../Starfield';

export default function StarfieldExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-indigo-950 via-purple-950 to-black rounded-lg overflow-hidden">
      <Starfield count={100} />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-primary">Starfield Effect</h2>
      </div>
    </div>
  );
}
