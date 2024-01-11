import AppContainer from '../components/AppContainer'
import BackgroundCircle from '../components/BackgroundCircle'
import ChoosenCategory from '../components/ChoosenCategory'
import Header from '../components/Header'
import SwitchModeInput from '../components/SwitchModeInput'
import Wrapper from '../components/Wrapper'
import QuestionBox from '../components/QuestionBox'
import Question from '../components/Question'
// import ProgressBar from '../components/ProgressBar'
import AnswersList from '../components/AnswersList'
import { useQuiz } from '../contexts/QuizContext'
import Spinner from '../components/Spinner'


function QuestionPage() {
	const { isLoading} = useQuiz()
	return (
		<AppContainer>
			<BackgroundCircle />

			<Wrapper>
				<Header className="headerRest">
					<ChoosenCategory />
					<SwitchModeInput />
				</Header>

				{isLoading && <Spinner />}
				{!isLoading && (
					<QuestionBox>
						<Question />
						<AnswersList />
					</QuestionBox>
				)}
			</Wrapper>
		</AppContainer>
	)
}

export default QuestionPage
