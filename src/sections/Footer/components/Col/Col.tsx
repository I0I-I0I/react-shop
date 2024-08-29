import { Typography } from "@/components/UI";
import styles from "./Col.module.css";
import React from "react";
import cls from "@/utils/cls";

interface ColProps {
	title: string;
	children: React.ReactNode[];
}

interface ColItemProps {
	className: string;
	children: React.ReactNode;
}

export const Col = ({ title, children }: ColProps) => (
	<div className={styles.col}>
		<Typography tag="h2" variant="title-2">
			{title}
		</Typography>
		<ul className={styles.col__list}>
			{children.map((item) => (
				<>{item}</>
			))}
		</ul>
	</div>
);

export const ColItem = ({ children, className, ...props }: ColItemProps) => (
	<li className={cls(className, styles.col__item)} {...props}>
		{children}
	</li>
);
