import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
	deposit,
	withdraw,
	mobileUpdate,
	fullNameUpdate,
	reset,
} from '../../store/myStoreActions';

const Form = () => {
	const dispatch = useDispatch();

	const [amount, setAmount] = useState('');
	const [fullname, setFullname] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [transactionId, setTransactionId] = useState(0);
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
							dispatch(deposit(amount));
							setTransactionId(transactionId + 1);
							setAmount('');
							dispatch({
								type: 'addTransaction',
								id: transactionId,
								payload: {
									amount: amount,
									date: new Date(),
									type: 'Credit',
								},
							});
						}}
					>
						Deposit
					</button>
					<button
						type="button"
						className="btn btn-danger col-1 m-1"
						onClick={() => {
							dispatch(withdraw(amount));
							setAmount('');
							setTransactionId(transactionId + 1);
							dispatch({
								type: 'addTransaction',
								id: transactionId,
								payload: {
									amount: amount,
									date: new Date(),
									type: 'Debit',
								},
							});
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
							dispatch(fullNameUpdate(fullname));
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
							dispatch(mobileUpdate(mobileNumber));
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
							dispatch(reset());
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
