import AppContainer from '../components/AppContainer'
import BackgroundCircle from '../components/BackgroundCircle'
import ChoosenCategory from '../components/ChoosenCategory'
import Header from '../components/Header'
import ScoreContainer from '../components/ScoreContainer'
import SwitchModeInput from '../components/SwitchModeInput'
import Wrapper from '../components/Wrapper'
import ScoreInfo from '../components/ScoreInfo'
import ScoreDetails from '../components/ScoreDetails'
import { useQuiz } from '../contexts/QuizContext'
import Spinner from '../components/Spinner'

function ScorePage() {
	const { isLoading } = useQuiz()
	return (
		<AppContainer>
			<BackgroundCircle />

			<Wrapper>
				<Header className="headerRest">
					<ChoosenCategory />
					<SwitchModeInput />
				</Header>

				<ScoreContainer>
					<ScoreInfo />
					{isLoading && <Spinner />}
					{!isLoading && <ScoreDetails />}
				</ScoreContainer>
			</Wrapper>
		</AppContainer>
	)
}

export default ScorePage
