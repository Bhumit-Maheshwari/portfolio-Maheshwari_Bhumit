function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <span className="error-icon">⚠️</span>
      <p className="error-text">{message}</p>
      {onRetry && (
        <button className="btn" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
