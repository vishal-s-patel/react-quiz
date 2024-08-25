import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestion, points, totalPoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestion} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
