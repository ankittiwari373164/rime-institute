export default function ProgressBar({ progress }) {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-40">
      <div 
        className="h-full bg-white transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
