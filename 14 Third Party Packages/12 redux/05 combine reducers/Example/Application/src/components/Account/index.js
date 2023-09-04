import React from 'react';

import { useSelector } from 'react-redux';

const Account = () => {
	console.log('Account Component');

	// Select only the required parts of the state
	const data = useSelector((prevState) => {
		return prevState;
	});
	const { account, transaction } = data;
	const { balance, fullName, mobile } = account;

	console.log(balance, fullName, mobile);
	return (
		<div className="container">
			<h1 className="text-primary">Account Details</h1>
			<table className="table table-bordered w-50">
				<thead>
					<tr>
						<th>Balance</th>
						<th>Username</th>
						<th>Mobile</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{balance}</td>
						<td>{fullName}</td>
						<td>{mobile}</td>
					</tr>
				</tbody>
			</table>
			<h1 className="text-primary">Transaction Details</h1>
			<table className="table table-bordered w-50">
				<thead>
					<tr>
						<th>Id</th>
						<th>Amount</th>
						<th>Type</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{transaction.map((eachTransaction) => {
						const { id, amount, date, type } = eachTransaction;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>{amount}</td>
								<td>{type}</td>
								<td>{date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Account;
