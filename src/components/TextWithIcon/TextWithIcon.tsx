import { Icon } from "@/components/UI";
import styles from "./TextWithIcon.module.css";
import cls from "@/utils/cls";
import { IconSize } from "../Icon/Icon";

type DirectionType = "left" | "right";

interface IconProps {
	children: React.ReactNode;
	src: string;
	size?: IconSize;
	direction?: DirectionType;
	gap?: string;
	className?: string;
}

export const TextWithIcon = ({
	children,
	className = "",
	size = "default",
	gap = "16px",
	direction = "right",
	src,
}: IconProps) => (
	<span className={cls(styles.textWithIcon, className)} style={{ gap: gap }}>
		{direction === "left" ? (
			<>
				<Icon src={src} size={size} />
				{children}
			</>
		) : (
			<>
				{children}
				<Icon src={src} size={size} />
			</>
		)}
	</span>
);
