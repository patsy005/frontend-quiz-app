import { useQuiz } from "../contexts/QuizContext"
import ErrorMsg from "./ErrorMsg"

function QuestionBox({ children }) {
	const {status, error} = useQuiz()

	if(status === 'rejected') return <ErrorMsg>{error}</ErrorMsg>
	
	return <div className="questionBox">{children}</div>
}

export default QuestionBox
