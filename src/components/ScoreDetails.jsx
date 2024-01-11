import { Link } from 'react-router-dom'
import { useQuiz } from '../contexts/QuizContext'

function ScoreDetails() {
	const { category, points, numOfQuestions, fetchQuiz, dispatch } = useQuiz()

	const maxPossiblePoints = numOfQuestions * 1

	function handlePlayAgain() {
		dispatch({ type: 'playAgain' })

		fetchQuiz()
	}

	return (
		<div className="scoreBoxContainer">
			<div className="listBox scoreBox">
				<div className="choosenSubject choosenSubjectScore">
					<div className="icon listSquare accessibility">
						<img src={category.icon} alt="quiz icon" />
					</div>
					<p className="headingS">{category.title}</p>
				</div>
				<div className="scoreInfo">
					<h3 className="displayScore">{points}</h3>
					<span>out of {maxPossiblePoints}</span>
				</div>
			</div>
			<Link to={`/`} className="btn scoreBtn" onClick={handlePlayAgain}>Play Again</Link>
		</div>
	)
}

export default ScoreDetails
