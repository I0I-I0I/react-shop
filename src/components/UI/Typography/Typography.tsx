import React from "react";
import styles from "./Typography.module.css";
import cls from "@/utils/cls";

type TypographyVariant = "title" | "text";
type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
	tag?: TypographyTag;
	variant?: TypographyVariant;
	className?: string;
	children: string | React.ReactElement;
}

export const Typography: React.FC<TypographyProps> = ({
	tag = "p",
	variant = "text",
	className = "",
	children,
	...props
}) => {
	const Component = tag;

	return (
		<Component className={cls(className, styles[variant])} {...props}>
			{children}
		</Component>
	);
};
