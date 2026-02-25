export default function Indicators({ data, currentIndex, setCurrentIndex, setProgress }) {
  return (
    <div className="absolute bottom-6 right-10 flex items-center gap-3 z-30">
      {data.map((_, index) => (
        <button
          key={index}
          onClick={() => { setCurrentIndex(index); setProgress(0); }}
          className={`h-1 transition-all duration-500 rounded-full ${
            index === currentIndex ? "w-12 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}
