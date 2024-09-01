import cls from "@/utils/cls";
import React, { InputHTMLAttributes, useId } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

export const Input: React.FC<InputProps> = ({
	label,
	className = "",
	...props
}) => {
	const id = useId();

	return (
		<>
			{label ? (
				<div className={styles.input__wrapper}>
					<label htmlFor={id}>{label}</label>
					<input className={cls(styles.input, className)} id={id} {...props} />
				</div>
			) : (
				<input className={cls(styles.input, className)} id={id} {...props} />
			)}
		</>
	);
};
