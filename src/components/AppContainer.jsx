import { useMode } from '../contexts/ModeContext'

function AppContainer({ children }) {
	const { mode } = useMode()

	return (
		<div className='app' data-mode={mode}>
			{children}
		</div>
	)
}

export default AppContainer
