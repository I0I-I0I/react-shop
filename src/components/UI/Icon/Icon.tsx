import React from "react";
import cls from "@/utils/cls";
import styles from "./Icon.module.css";

type IconSize =
	| "default"
	| "small"
	| "medium"
	| "large";

interface IconProps {
	src: string;
	size: IconSize;
	alt?: string;
}

export const Icon: React.FC<IconProps> = ({ src, size = "default", alt = "Imagine icon here" }) => (
	<img src={src} alt={alt} className={cls(styles.icon, styles[size])} />
)
