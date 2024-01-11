import correctIcon from '../assets/images/icon-correct.svg'
import incorrectIcon from '../assets/images/icon-incorrect.svg'

import { useQuiz } from '../contexts/QuizContext'

function Answer({ option, answerIndex }) {
	const { answer, dispatch, answerSubmit, correctAnswer } = useQuiz()

	const isAnswer = answer !== null && answerSubmit

	const isSelected = answer === option
	const isCorrect = correctAnswer === option
	// const isIncorrect = isSelected && !isCorrect

	const btnClasses = `answerBtn listBtn ${
		isAnswer && isSelected ? (isCorrect ? 'pickedCorrectly' : 'pickedIncorrectly') : ''
	} ${isCorrect && isAnswer ? 'correctAnswer' : ''}`

	const iconToShow =
		isAnswer && (isSelected || (isCorrect && !isSelected)) ? (isCorrect ? correctIcon : incorrectIcon) : null

	return (
		<button className={btnClasses} onClick={() => dispatch({ type: 'newAnswer', payload: option })}>
			<div className="listBox answerBox">
				<div className="box">
					<div className="listSquare answerSquare">
						<p>{String.fromCharCode(65 + answerIndex)}</p>
					</div>
					<p className="answer">{option}</p>
				</div>
				{iconToShow && <img src={iconToShow} />}
			</div>
		</button>
	)
}

export default Answer
