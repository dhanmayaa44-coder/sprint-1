function Card({ title, description, children, className = "" }) {
  return (
    <div className={`ui-card ${className}`}>
      {title && <h3>{title}</h3>}

      {description && (
        <p className="ui-card-description">
          {description}
        </p>
      )}

      <div className="ui-card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;