export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-500">
        {count} {count === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {count === 0 ? (
        <div className="mt-5 border border-dashed border-slate-200 rounded-xl py-10 px-4 text-center">
          <p className="text-slate-400 text-sm leading-relaxed">
            Your stack is empty.
            <br />
            Add technologies to get started.
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-5 flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 border border-slate-100 rounded-xl p-3"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
                <button
                  className="text-slate-400 hover:text-slate-600 w-6 h-6 flex items-center justify-center shrink-0"
                  aria-label={`Remove ${item.name} from stack`}
                  onClick={() => onRemove(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            className="mt-5 w-full rounded-lg py-2.5 text-sm font-semibold border transition-colors"
            style={{ borderColor: "#f3c9c6", color: "#d82c20" }}
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
