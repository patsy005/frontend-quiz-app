import { Link } from 'react-router-dom'

function QuizListItem({ category }) {
	const { title, icon, id } = category
	// console.log(category.questions)

	return (
		<Link className="listBtn subjectBtn" to={`/question/${id}?category=${title}`}>
			<li className="subject listBox">
				<div className="listSquare subjectSquare">
					<img src={icon} />
				</div>
				<p>{title}</p>
			</li>
		</Link>
	)
}

export default QuizListItem

// onClick={() => {
// 	dispatch({ type: 'category/choosen', payload: questions })
// }}
