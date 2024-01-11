import { useQuiz } from '../contexts/QuizContext'

function ProgressBar() {
	const { numOfQuestions, index } = useQuiz()

	return (
		<div className="progress">
			<progress max={numOfQuestions} value={index + 1}></progress>
		</div>
	)
}

export default ProgressBar
