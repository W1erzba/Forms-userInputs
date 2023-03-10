import { useState } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurrHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = ''; // it works but its not ideal because of directly manipulating a dom. And this is React role not our.

		setEnteredName('');
		setEnteredNameTouched(false); // this is the way to reset input via React
	};

	const nameInputClasses = nameInputIsInvalid
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
					onBlur={nameInputBlurrHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty. 😶‍🌫️</p>
				)}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

// Side note: it's better to use useRef when u wan't to simply get value from form validation so there is no need to update it on a every keystroke. However if you need for eg. check every letter that user is typing to validate his password or something like that, it would be better to use useState to have full controle over the input updates. useState is also your choice when you want to reset form input after subbmition by just adding an setName('') on the end of the handler. With useRef it's impossible to do that.
