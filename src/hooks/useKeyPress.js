import { useEffect, useState } from 'react'

function useKeyPress(target) {
	const [keyPressed, setKeyPressed] = useState(false)

	useEffect(() => {
		function handleKeyDown({ key }) {
			if (key === target) setKeyPressed(true)
		}

		function handleKeyUp({ key }) {
			if (key === target) setKeyPressed(true)
		}

		window.addEventListener('keydown', handleKeyDown)
		window.removeEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [target])

	return keyPressed
}

export default useKeyPress
