import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h2>{technology.name}</h2>

      <p className="description">{technology.description}</p>

      <div className="card-info">
        <span className="category">{technology.category}</span>

        <span>{technology.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span>⭐ {technology.rating}</span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;