export default function IconWTooltip({ name, href, svg, targetBlank = true }) {
  return (
    <a
      href={href}
      target={`${targetBlank ? "_blank" : ""}`}
      rel="noopener noreferrer"
      className="group relative inline-block w-6 h-6 text-white hover:text-neutral-400 transition-colors"
    >
      {/* SVG */}
      <div className="h-5 fill-white">{svg}</div>

      {/* Tooltip */}
      <span className="
        absolute bottom-1/2 left-1/2 -translate-x-1/2 mb-2
        px-2 py-1 text-xs bg-neutral-900 text-white rounded
        opacity-0 pointer-events-none
        transition-all duration-200
        group-hover:opacity-100 group-hover:bottom-full
      ">
        {name}
      </span>
    </a>
  );
}
