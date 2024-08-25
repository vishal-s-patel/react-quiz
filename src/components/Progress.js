function Progress({ i, numQuestion, points, totalPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={i} />
      <p>
        Question <strong>{i + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
