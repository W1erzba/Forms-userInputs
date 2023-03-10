import { useState } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid =
		enteredEmail.trim() !== '' && enteredEmail.includes('@');
	const emialInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		console.log(enteredEmail, enteredName);

		setEnteredName('');
		setEnteredEmail('');
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emialInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty. 😶‍🌫️</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your e-mail adress</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emialInputIsInvalid && (
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

// Side note: it's better to use useRef when u wan't to simply get value from form validation so there is no need to update it on a every keystroke. However if you need for eg. check every letter that user is typing to validate his password or something like that, it would be better to use useState to have full controle over the input updates. useState is also your choice when you want to reset form input after subbmition by just adding an setName('') on the end of the handler. With useRef it's impossible to do that.
