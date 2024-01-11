import AppContainer from '../components/AppContainer'
import BackgroundCircle from '../components/BackgroundCircle'
import SwitchModeInput from '../components/SwitchModeInput'
import Wrapper from '../components/Wrapper'
import StartQuizContainer from '../components/StartQuizContainer'
import WelcomeMsg from '../components/WelcomeMsg'
import Header from '../components/Header'
import QuizList from '../components/QuizList'

function StartQuizPage() {

	return (
		<AppContainer>
			<BackgroundCircle />

			<Wrapper>

				<Header className="headerStartMenu">
					<SwitchModeInput />
				</Header>

				<StartQuizContainer>
					<WelcomeMsg />
					<QuizList />
				</StartQuizContainer>
			</Wrapper>
		</AppContainer>
	)
}

export default StartQuizPage
