import { useQuiz } from '../contexts/QuizContext'
import ProgressBar from './ProgressBar'

function Question() {
	const { questions, index, numOfQuestions } = useQuiz()

	const question = questions?.at(index)


	return (
		<div className="question">
			<span className="bodyS">
				Question {index + 1} of {numOfQuestions}{' '}
			</span>
			<p className="headingM">{question?.question}</p>
			<ProgressBar />
		</div>
	)
}

export default Question
