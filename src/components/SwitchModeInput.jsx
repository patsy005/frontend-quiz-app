import { useMode } from '../contexts/ModeContext'


import iconSunDark from '../assets/images/icon-sun-dark.svg'
import iconSunLight from '../assets/images/icon-sun-light.svg'
import iconMoonDark from '../assets/images/icon-moon-dark.svg'
import iconMoonLight from '../assets/images/icon-moon-light.svg'

function SwitchModeInput() {
    const { mode, setMode } = useMode()

	function handleChangeMode() {
		setMode(mode => (mode === 'light' ? 'dark' : 'light'))
	}
	return (
		<div className='switchMode'>
			<img src={mode === 'light' ? iconSunDark : iconSunLight} alt="Sun icon" />
			<input type="checkbox" id="switch" value={mode} onClick={handleChangeMode} /><label htmlFor="switch"></label>
            <img src={mode === 'light' ? iconMoonDark : iconMoonLight} alt='Moon icon' />
		</div>
	)
}

export default SwitchModeInput
