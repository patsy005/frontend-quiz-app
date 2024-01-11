import errorIcon from '../assets/images/icon-incorrect.svg'

function ErrorMsg({ children }) {
	return (
		<div className="errorMsg">
			<img src={errorIcon} />
			<p>{children}</p>
		</div>
	)
}

export default ErrorMsg
