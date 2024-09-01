import cls from "@/utils/cls";
import React from "react";
import styles from "./Button.module.css";

type ButtonSize = "none" | "medium" | "small" | "large";

type ButtonVariants = "contained" | "rounded" | "square" | "search";

interface ButtonProps {
	children: string | React.ReactElement;
	className?: string;
	size?: ButtonSize;
	variant: ButtonVariants;
}

export const Button = ({
	children,
	className = "",
	size = "none",
	variant = "contained",
}: ButtonProps): JSX.Element => (
	<button
		className={cls(styles.button, styles[size], styles[variant], className)}
	>
		{children}
	</button>
);
