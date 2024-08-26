import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
	label?: string;
	options: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options }) => (
	<div className={styles.dropdown__block}>
		{ label && <label htmlFor="cars">{label}</label> }
		<select className={styles.dropdown} name="cars" id="cars">
			{
				options.map((option) =>
				<option value={option}>{option}</option>
			)}
		</select>
	</div>
)
