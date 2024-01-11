import { createContext, useContext, useEffect, useReducer } from 'react'

const BASE_URL = 'http://localhost:9000'

const QuizContext = createContext()

const initialState = {
	categories: [],
	category: {},
	questions: [],
	options: [],
	status: 'loading',
	isLoading: false,
	index: 0,
	answer: null,
	points: 0,
	answerSubmit: false,
	correctAnswer: null,
	error: '',
}

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return { ...state, isLoading: true }
		case 'dataRecieved':
			return { ...state, status: 'ready', categories: action.payload, isLoading: false, error: '' }
		case 'category/choosen':
			return {
				...state,
				category: action.payload,
				questions: action.payload.questions,
				isLoading: false,
				options: action.payload.questions.at(state.index).options,
				correctAnswer: action.payload.questions.at(state.index).answer,
			}

		case 'newAnswer':
			return {
				...state,
				isLoading: false,
				answer: action.payload,
				correctAnswer: state.questions.at(state.index).answer,
			}
		case 'submitAnswer':
			return {
				...state,
				isLoading: false,
				points: state.correctAnswer === state.answer ? state.points + 1 : state.points,
				answerSubmit: true,
				// correctAnswer: state.questions.at(state.index).answer,
				error: !state.answer ? 'Please select an answer' : '',
			}

		case 'nextQuestion':
			return {
				...state,
				answer: null,
				index: state.index + 1,
				// points: state.correctAnswer === state.answer ? state.points + 1 : state.points,
				options: state.questions.at(state.index + 1).options,
				answerSubmit: false,
				correctAnswer: state.questions.at(state.index).answer,
				error: '',
			}
		case 'finishQuiz':
			console.log(state.points)
			return { ...state }

		case 'playAgain':
			return { ...initialState }

		case 'rejected':
			return { ...state, status: 'rejected', isLoading: false, error: action.payload }
	}
}

function QuizProvider({ children }) {
	const [
		{
			categories,
			status,
			isLoading,
			index,
			questions,
			category,
			options,
			answer,
			points,
			answerSubmit,
			correctAnswer,
			error,
		},
		dispatch,
	] = useReducer(reducer, initialState)

	const numOfQuestions = questions?.length

	async function fetchQuiz() {
		dispatch({ type: 'loading' })
		try {
			const res = await fetch(`${BASE_URL}/quizzes`)
			const data = await res.json()
			dispatch({ type: 'dataRecieved', payload: data })
		} catch (err) {
			dispatch({ type: 'rejected', payload: 'There was an error loading quizz' })
		}
	}

	useEffect(() => {
		async function fetchQuiz() {
			dispatch({ type: 'loading' })
			try {
				const res = await fetch(`${BASE_URL}/quizzes`)
				const data = await res.json()
				dispatch({ type: 'dataRecieved', payload: data })
			} catch (err) {
				dispatch({ type: 'rejected', payload: 'There was an error loading quizz' })
			}
		}

		fetchQuiz()
	}, [])


	async function getCategory(id) {
		dispatch({ type: 'loading' })
		try {
			const res = await fetch(`${BASE_URL}/quizzes/${id}`)
			const data = await res.json()

			dispatch({ type: 'category/choosen', payload: data })
		} catch (err) {
			dispatch({ type: 'rejected', payload: 'There was an error loading answers' })
		}
	}

	return (
		<QuizContext.Provider
			value={{
				categories,
				status,
				isLoading,
				getCategory,
				index,
				dispatch,
				questions,
				numOfQuestions,
				category,
				options,
				answer,
				points,
				answerSubmit,
				correctAnswer,
				error,
				fetchQuiz,
			}}>
			{children}
		</QuizContext.Provider>
	)
}

function useQuiz() {
	const context = useContext(QuizContext)

	return context
}

export { QuizProvider, useQuiz }
