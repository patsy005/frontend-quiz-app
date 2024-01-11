import { useQuiz } from '../contexts/QuizContext'
import Answer from './Answer'
import QuizBtn from './QuizBtn'
import ErrorMsg from './ErrorMsg'
import { Link, useParams } from 'react-router-dom'

function AnswersList() {
	const { options, answer, dispatch, answerSubmit, error, numOfQuestions, index } = useQuiz()

	const { id } = useParams()

	if (!options) return

	const isAnswer = answer !== null && answerSubmit

	const lastQuestion = index === numOfQuestions - 1
	const isLastQuestion = isAnswer && lastQuestion
	const isNextBtn = isAnswer && !lastQuestion

	return (
		<div className="answers">
			<div className="list">
				{options.map((option, index) => (
					<Answer option={option} answerIndex={index} key={index} />
				))}
			</div>
			{!isAnswer && <QuizBtn onClick={() => dispatch({ type: 'submitAnswer' })}>Submit Answer</QuizBtn>}
			{isNextBtn && <QuizBtn onClick={() => dispatch({ type: 'nextQuestion' })}>Next Question</QuizBtn>}
			{isLastQuestion && (
				<Link to={`/score/${id}`}>
					<QuizBtn
						onClick={() => {
							dispatch({ type: 'finishQuiz' })
						}}>
						Finish
					</QuizBtn>
				</Link>
			)}
			{error !== '' && <ErrorMsg>{error}</ErrorMsg>}
		</div>
	)
}

export default AnswersList
