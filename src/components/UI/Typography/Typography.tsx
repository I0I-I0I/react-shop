import React from "react";
import styles from "./Typography.module.css";
import cls from "@/utils/cls";

type TypographyVariant =
	| "title-1"
	| "title-2"
	| "title-3"
	| "title-4"
	| "title-5"
	| "title-6"
	| "text"
	| "text_small"
	| "text_large";

type TypographyTag =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span";

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
