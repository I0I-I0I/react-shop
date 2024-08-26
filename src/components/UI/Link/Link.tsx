import React from "react";
import styles from "./Link.module.css";
import cls from "../../../utils/cls";

type variantType = "default" | "block";

interface Props {
	href: string;
	children: string | React.ReactElement;
	className?: string;
	variant?: variantType;
}

enum linkVariants {
	default = "default",
	block = "block",
}

const Link: React.FC<Props> = ({
	href,
	children,
	className = "",
	variant = "default",
	...props
}) => (
	<a
		className={cls(styles.link, linkVariants[variant], className)}
		href={href}
		{...props}
	>
		{children}
	</a>
)

export default Link;
