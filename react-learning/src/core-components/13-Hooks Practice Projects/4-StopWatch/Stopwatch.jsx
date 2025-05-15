import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);
	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!isRunning && time > 0) {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [isRunning, time]);
	const formatTime = (milliseconds) => {
		let totalMs = milliseconds;
		let minutes = Math.floor(totalMs / 60000);
		let seconds = Math.floor((totalMs % 60000) / 1000);
		let ms = totalMs % 1000;

		return {
			minutes: String(minutes).padStart(2, "0"),
			seconds: String(seconds).padStart(2, "0"),
			milliseconds: String(ms).padStart(3, "0").slice(0, 2),
		};
	};
	const { minutes, seconds, milliseconds } = formatTime(time);
	const toggleTimer = () => {
		setIsRunning(!isRunning);
	};
	const resetTimer = () => {
		clearInterval(intervalRef.current);
		setIsRunning(false);
		setTime(0);
	};
	return (
		<>
			<div style={{ textAlign: "center", marginTop: "5rem" }}>
				<h1>Stopwatch</h1>
				<div
					style={{
						fontSize: "2rem",
						fontFamily: "monospace",
						marginBottom: "1rem",
					}}
				>
					{minutes}:{seconds}:{milliseconds}
				</div>

				<button onClick={toggleTimer}>
					{isRunning ? "Pause" : "Start"}
				</button>
				<button onClick={resetTimer} style={{ marginLeft: "10px" }}>
					Reset
				</button>
			</div>
		</>
	);
};

export default Stopwatch;
