import cls from "@/utils/cls";
import styles from "./Icon.module.css";
import { ReactSVG } from "react-svg";

export type IconSize = "default" | "small" | "medium" | "large";

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
