import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		isValid: enteredNameIsValid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		isValid: enteredEmailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.trim() !== '' && value.includes('@'));

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		console.log(enteredEmail, enteredName);

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty. 😶‍🌫️</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your e-mail adress</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className='error-text'>
						email adres needs include '@' and can't be empty. 😶‍🌫️
					</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
