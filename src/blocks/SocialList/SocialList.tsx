import { Icon, IconSize, Link } from "@/components/UI";
import cls from "@/utils/cls";
import React from "react";
import styles from "./SocialList.module.css";

type SizeType = "medium" | "small";

interface SocialListProps {
	children: React.ReactNode[];
	size: SizeType;
	className?: string;
}

interface SocialItemProps {
	href: string;
	src: string;
	size: IconSize;
	alt: string;
	className?: string;
}

export const SocialList = ({
	children,
	size,
	className = "",
}: SocialListProps) => (
	<ul className={cls(styles.social__list, styles[size], className)}>
		{children.map((item) => (
			<>{item}</>
		))}
	</ul>
);

export const SocialItem = ({
	href,
	size,
	src,
	alt,
	className = "",
}: SocialItemProps) => (
	<li className={styles.social__item}>
		<Link component="link" href={href} aria-label={alt} className={className}>
			<Icon size={size} src={src} />
		</Link>
	</li>
);
