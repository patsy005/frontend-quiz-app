import { createContext, useContext, useState } from 'react'

const ModeContext = createContext()


function ModeProvider({ children }) {
	const [mode, setMode] = useState('light')

	return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
}

function useMode() {
	const context = useContext(ModeContext)

	return context
}

export { ModeProvider, useMode }
