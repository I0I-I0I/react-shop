import cls from "@/utils/cls";
import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
	className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => (
	<img
		src="/Logo.png"
		alt="Imagine logo here"
		className={cls(styles.logo, className)}
	/>
);
