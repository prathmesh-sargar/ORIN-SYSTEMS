export default function MegaMenu({ children }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[900px] pt-4">
      <div className="
        bg-white/90
        text-black
        backdrop-blur-xl
        border border-black/5
        rounded-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.08)]
        p-8
      ">
        {children}
      </div>
    </div>
  );
}
