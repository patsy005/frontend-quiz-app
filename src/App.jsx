import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartQuizPage from './pages/StartQuizPage'
import QuestionPage from './pages/QuestionPage'
import ScorePage from './pages/ScorePage'
import { ModeProvider } from './contexts/ModeContext'
import { QuizProvider } from './contexts/QuizContext'

function App() {
	return (
		<QuizProvider>
			<ModeProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<StartQuizPage />} />
						<Route path="question/:id" element={<QuestionPage />} />
						<Route path="score/:id" element={<ScorePage />} />
					</Routes>
				</BrowserRouter>
			</ModeProvider>
		</QuizProvider>
	)
}

export default App
