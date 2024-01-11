import { useParams } from 'react-router-dom'
import { useQuiz } from '../contexts/QuizContext'
import { useEffect } from 'react'

function ChoosenCategory() {
	const { getCategory, category, isLoading, status } = useQuiz()
	const { id } = useParams()

	useEffect(() => {
		getCategory(id)
	}, [id])

	if(isLoading || !category || status === 'rejected') return 



	// const { categories, getCategory } = useQuiz()
	// const { id } = useParams()

	// // const choosenCategory = categories?.filter(category => category?.id === +id)

	// const choosenCategory = getCategory(id, categories)

	return (
		<div className="choosenSubject">
			<>
				<div className={`icon listSquare ${category.title ? category.title.toLowerCase() : ''}`}>
					<img src={category.icon} />
				</div>
				<p className="headingS">{category.title}</p>
			</>
		</div>
	)
}

export default ChoosenCategory
