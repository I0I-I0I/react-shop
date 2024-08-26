import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import cls from "@/utils/cls";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	className: string;
}

export const Input: React.FC<InputProps> = ({ name, label, className, ...props }) => (
	<div className={cls(styles.input__wrapper, className)}>
		{ label && <label htmlFor={name}>{label}</label> }
		<input id={name} {...props} />
	</div>
)
