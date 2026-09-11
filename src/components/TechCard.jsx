export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } =
    tech;

  return (
    <div className="card bg-base-200 border border-base-300 hover:border-secondary/50 transition-colors">
      <div className="card-body gap-3">
        <div className="flex items-start justify-between">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-11 h-11 object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {badge && (
            <span className="badge badge-sm gradient-bg text-white border-none">
              {badge}
            </span>
          )}
        </div>

        <h3 className="card-title text-lg">{name}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="badge badge-outline badge-sm">{category}</span>
          <span className="badge badge-ghost badge-sm">{difficulty}</span>
          <span className="badge badge-ghost badge-sm gap-1">
            <span aria-hidden="true">★</span>
            {rating}
          </span>
        </div>

        <div className="card-actions mt-3">
          <button
            className={`btn btn-sm w-full ${
              isAdded ? "btn-disabled" : "btn-gradient"
            }`}
            onClick={() => onAdd(tech)}
            disabled={isAdded}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
