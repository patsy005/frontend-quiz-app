import { useQuiz } from '../contexts/QuizContext'
import ErrorMsg from './ErrorMsg'
import QuizListItem from './QuizListItem'
import Spinner from './Spinner'

function QuizList() {
	const { categories, isLoading, error, status } = useQuiz()

	if(isLoading) return <Spinner />
	if(status === 'rejected') return <ErrorMsg>{error}</ErrorMsg>


	return (
		<div className="subjects">
			<ul className="subjectsList list">
				{categories.map(category => (
					<QuizListItem category={category} key={category.title} />
				))}
			</ul>
		</div>
	)
}

export default QuizList
