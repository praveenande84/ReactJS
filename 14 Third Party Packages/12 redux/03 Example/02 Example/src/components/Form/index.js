import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

const Form = () => {
	const dispatch = useDispatch();

	const [amount, setAmount] = useState('');
	const [fullname, setFullname] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	return (
		<div className="container">
			<h1>Form</h1>
			<form>
				<div className="row">
					<div className="col-4">
						<input
							className="form-control"
							type="number"
							placeholder="Enter Amount"
							value={amount}
							onChange={(event) => setAmount(event.target.value)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary col-1 m-1"
						onClick={() => {
							dispatch({ type: 'deposit', payload: amount });
							setAmount('');
						}}
					>
						Deposit
					</button>
					<button
						type="button"
						className="btn btn-danger col-1 m-1"
						onClick={() => {
							dispatch({ type: 'withdraw', payload: amount });
							setAmount('');
						}}
					>
						Withdraw
					</button>
				</div>
				<div className="row">
					<div className="col-4">
						<input
							className="form-control"
							type="text"
							placeholder="Enter Fullname"
							value={fullname}
							onChange={(event) =>
								setFullname(event.target.value)
							}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary col-1 m-1"
						onClick={() => {
							dispatch({
								type: 'fullNameUpdate',
								payload: fullname,
							});
							setFullname('');
						}}
					>
						Update
					</button>
				</div>
				<div className="row">
					<div className="col-4">
						<input
							className="form-control"
							type="number"
							placeholder="Enter Mobile Number"
							value={mobileNumber}
							onChange={(event) =>
								setMobileNumber(event.target.value)
							}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary col-1 m-1"
						onClick={() => {
							dispatch({
								type: 'mobileUpdate',
								payload: mobileNumber,
							});
							setMobileNumber('');
						}}
					>
						Update
					</button>
				</div>
				<div className="row">
					<button
						type="button"
						className="btn btn-info col-1 m-1"
						onClick={() => {
							dispatch({
								type: 'reset',
							});
						}}
					>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
