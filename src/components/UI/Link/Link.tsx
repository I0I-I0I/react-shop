import React from "react";
import styles from "./Link.module.css";
import cls from "@/utils/cls";

type variantType = "default" | "small";

interface Props {
	href: string;
	children: string | React.ReactElement;
	className?: string;
	variant?: variantType;
}

const variantLinks = {
	default: "",
	small: "link_small",
};

export const Link: React.FC<Props> = ({
	href,
	children,
	className = "",
	variant = "default",
	...props
}) => (
	<a
		className={cls(styles.link, styles[variantLinks[variant]], className)}
		href={href}
		{...props}
	>
		{children}
	</a>
);
