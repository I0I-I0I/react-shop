import cls from "@/utils/cls";
import React from "react";
import styles from "./Link.module.css";

type ComponentType = "link" | "button" | "card";

type ButtonVariants = "default" | "rounded" | "square" | "search";
type LinkVariants = "default";

type LinkSize = "default" | "small";
type ButtonSize = "default" | "medium" | "small" | "large";

type SizeType<T extends ComponentType> = T extends "link"
	? LinkSize
	: ButtonSize;
type VariantType<T extends ComponentType> = T extends "link"
	? LinkVariants
	: ButtonVariants;

interface LinkProps<T extends ComponentType> extends React.ComponentProps<"a"> {
	href: string;
	children: React.ReactNode;
	noHover?: boolean;
	className?: string;
	size?: SizeType<T>;
	variant?: VariantType<T>;
	component: T;
}

export const Link = <T extends ComponentType>({
	href,
	children,
	noHover = false,
	className = "",
	variant = "default",
	size = "default",
	component,
	...props
}: LinkProps<T>) => {
	const classesForLink = noHover ? "" : styles.linkHover;
	const classes = cls(
		component === "link" ? classesForLink : "",
		styles[component],
		styles[size],
		styles[variant],
		className,
	);

	return (
		<a className={classes} href={href} {...props}>
			{children}
		</a>
	);
};
