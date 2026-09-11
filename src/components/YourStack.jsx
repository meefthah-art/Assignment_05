export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="card bg-base-200 border border-base-300 h-fit lg:sticky lg:top-24">
      <div className="card-body gap-4">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-lg">Your Stack</h2>
          {count > 0 && (
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={onRemoveAll}
            >
              Remove All
            </button>
          )}
        </div>

        <p className="text-sm text-base-content/60">
          {count} {count === 1 ? "Technology" : "Technologies"} Selected
        </p>

        {count === 0 ? (
          <div className="text-center py-10 px-2">
            <p className="text-base-content/50 text-sm">
              Your stack is empty. Click "Add to Stack" on any technology
              card to start building it.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 bg-base-100 border border-base-300 rounded-xl p-3"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-8 h-8 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{item.name}</p>
                  <p className="text-xs text-base-content/50">
                    {item.category}
                  </p>
                </div>
                <button
                  className="btn btn-ghost btn-xs btn-circle"
                  aria-label={`Remove ${item.name} from stack`}
                  onClick={() => onRemove(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
