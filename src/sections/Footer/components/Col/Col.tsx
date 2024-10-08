import { Typography } from "@/components/UI";
import cls from "@/utils/cls";
import React from "react";
import styles from "./Col.module.css";

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
		<Typography tag="h2" variant="title-5">
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
