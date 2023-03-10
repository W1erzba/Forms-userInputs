import { useRef, useState } from 'react';

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);

		console.log(enteredName);

		const enterdValue = nameInputRef.current.value;
		console.log(enterdValue);

		nameInputRef.current.value = ''; // it works but its not ideal because of directly manipulating a dom. And this is React role not our.

		setEnteredName(''); // this is the way to reset input via React
	};

	const nameInputClasses = enteredNameIsValid
		? 'form-control'
		: 'form-control invalid';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					ref={nameInputRef}
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{!enteredNameIsValid && (
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
