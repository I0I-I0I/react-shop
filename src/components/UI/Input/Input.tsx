import React, { InputHTMLAttributes, useId } from "react";
import styles from "./Input.module.css";
import cls from "@/utils/cls";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = "", ...props }) => {
	const id = useId();

	return (
		<div className={cls(styles.input__wrapper, className)}>
			{ label && <label htmlFor={id}>{label}</label> }
			<input id={id} {...props} />
		</div>
)}
