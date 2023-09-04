import React from 'react';
import bootstrap from 'bootstrap';

import { useSelector } from 'react-redux';

const Account = () => {
	console.log('Account Component');

	// Select only the required parts of the state
	const data = useSelector((prevState) => {
		return prevState;
	});

	const { balance, fullName, mobile } = data;
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
		</div>
	);
};

export default Account;
