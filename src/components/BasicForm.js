import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput((value) => value.includes('@'));

	const formSubbmitHandler = (e) => {
		e.preventDefault();
		firstNameReset();
		lastNameReset();
		emailReset();
		console.log(
			`Hello ${enteredFirstName} ${enteredLastName}, your email adres is ${enteredEmail}`
		);
	};

	const formIsValid =
		firstNameIsValid &&
		!firstNameHasError &&
		lastNameIsValid &&
		!lastNameHasError &&
		emailIsValid &&
		!emailHasError;

	return (
		<form onSubmit={formSubbmitHandler}>
			<div className='control-group'>
				<div
					className={
						firstNameHasError ? 'form-control invalid' : 'form-control'
					}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='firstName'
						value={enteredFirstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && <p>You have to write your name.</p>}
				</div>
				<div
					className={
						lastNameHasError ? 'form-control invalid' : 'form-control'
					}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='lastName'
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && <p>You have to write your last name.</p>}
				</div>
			</div>
			<div className={emailHasError ? 'form-control invalid' : 'form-control'}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='email'
					id='email'
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p>You have to write your e-mail address.</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
