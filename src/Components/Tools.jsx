export default function Tools({ tools }) {
  return (
    <div className="flex gap-3 items-center">
      {tools.map((tool) => (
        <img key={tool} src={tool} className="w-7 h-7" alt="Tool" />
      ))}
    </div>
  );
}
