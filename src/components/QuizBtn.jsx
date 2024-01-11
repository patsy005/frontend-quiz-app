function QuizBtn({ children, onClick }) {
	return (
		<button className="btn submitBtn" onClick={onClick}>
			{children}
		</button>
	)
}

export default QuizBtn
