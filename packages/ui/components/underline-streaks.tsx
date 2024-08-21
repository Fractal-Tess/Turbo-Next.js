export function UnderlineStreaks() {
  return (
    <div className="relative mt-4 flex w-full justify-center">
      <div className="absolute h-1 w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute h-1 w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
      <div className="absolute h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
    </div>
  );
}
