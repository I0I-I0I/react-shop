import React from "react";
import styles from "./Link.module.css";
import cls from "@/utils/cls";

type sizeType = "default" | "small";

type variantType = "link" | "button" | "card";

interface LinkProps extends React.ComponentProps<"a"> {
	href: string;
	children: React.ReactNode;
	noHover?: boolean;
	className?: string;
	size?: sizeType;
	variant?: variantType;
}

export const Link = ({
	href,
	children,
	noHover,
	className = "",
	size = "default",
	variant = "link",
	...props
}: LinkProps) => {
	return (
		<a
			className={cls(
				!noHover ? styles.linkHover : "",
				styles.defaultLink,
				styles[size],
				styles[variant],
				className,
			)}
			href={href}
			{...props}
		>
			{children}
		</a>
	);
};
