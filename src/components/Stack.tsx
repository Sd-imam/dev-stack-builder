import type { Technology } from "../types/technology";
//
interface StackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
//fkdljfak
function Stack({ stack, onRemove, onRemoveAll }: StackProps) {
  return (
    <aside className="stack">
//
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>

          {stack.length === 0 && (
            <p>No technologies selected yet.</p>
          )}
        </div>

        <span>{stack.length} Selected</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>

                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>

              </div>
            ))}
          </div>

          <button
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default Stack;