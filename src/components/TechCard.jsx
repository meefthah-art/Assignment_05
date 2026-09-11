export default function TechCard({ tech, isAdded, onAdd }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
    iconBg,
    badgeBg,
    badgeBorder,
    badgeText,
  } = tech;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 flex flex-col hover:shadow-md hover:border-slate-200 transition-all">
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-6 h-6 object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        {badge && (
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap"
            style={{
              backgroundColor: badgeBg,
              borderColor: badgeBorder,
              color: badgeText,
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="bg-slate-100/80 text-slate-600 px-2.5 py-1 rounded-full font-medium">
          {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="flex items-center gap-1 text-slate-700 font-medium">
          <span style={{ color: "#f59e0b" }} aria-hidden="true">
            ★
          </span>
          {rating}
        </span>
      </div>

      <button
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "btn-dark"
        }`}
        onClick={() => onAdd(tech)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
