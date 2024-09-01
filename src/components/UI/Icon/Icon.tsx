import cls from "@/utils/cls";
import { ReactSVG } from "react-svg";
import styles from "./Icon.module.css";

export type IconSize =
	| "default"
	| "small"
	| "medium"
	| "medium_small"
	| "large";

interface IconProps {
	src: string;
	size?: IconSize;
	alt?: string;
}

export const Icon = ({
	src,
	size = "default",
	alt = "Imagine icon here",
}: IconProps) => (
	<ReactSVG
		data-svg-icon
		src={src}
		desc={alt}
		className={cls(styles.icon, styles[size])}
	/>
);
