import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.includes('@');

	const {
		value: enteredFirstName,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput(isNotEmpty);

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(isEmail);

	const formSubbmitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;
		firstNameReset();
		lastNameReset();
		emailReset();
		console.log('Submitted!');
		console.log(
			`Hello ${enteredFirstName} ${enteredLastName}, your email adres is ${enteredEmail}`
		);
	};

	const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

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
					{firstNameHasError && (
						<p className='error-text'>Please enter your name.</p>
					)}
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
					{lastNameHasError && (
						<p className='error-text'>Please enter your last name.</p>
					)}
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
				{emailHasError && (
					<p className='error-text'>Please enter valid e-mail address.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
