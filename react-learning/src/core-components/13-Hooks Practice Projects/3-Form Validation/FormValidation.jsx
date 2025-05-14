import React, { useState, useEffect } from "react";

const FormValidation = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState("");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const validate = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		return newErrors;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			alert("Form submitted successfully!");
			console.log("Form Data:", formData);
            setErrors({})
		} else {
			setErrors(validationErrors);
		}
	};
	return (
		<>
			<div style={{ maxWidth: "400px", margin: "2rem auto" }}>
				<h1>Form Validation</h1>
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					
					<div style={{ marginBottom: "1rem" }}>
						<label>Name:</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							style={{ width: "100%" }}
						/>
						{errors.name && (
							<p style={{ color: "red" }}>{errors.name}</p>
						)}
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Email:</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							style={{ width: "100%" }}
						/>
						{errors.email && (
							<p style={{ color: "red" }}>{errors.email}</p>
						)}
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label>Password:</label>
						<input
							type='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							style={{ width: "100%" }}
						/>
						{errors.password && (
							<p style={{ color: "red" }}>{errors.password}</p>
						)}
					</div>

					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	);
};

export default FormValidation;
