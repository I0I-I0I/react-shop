import React from "react";
import cls from "@/utils/cls";
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
)
