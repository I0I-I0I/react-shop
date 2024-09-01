import cls from "@/utils/cls";
import styles from "./Section.module.css";

type SizeType = "default" | "small" | "large";

interface SectionProps {
	children: React.ReactNode;
	size?: SizeType;
	className?: string;
	src: string;
}

export const Section = ({
	src,
	children,
	size = "default",
	className = "",
}: SectionProps) => (
	<section
		style={{ backgroundImage: `url(${src}) ` }}
		className={cls(styles.section)}
	>
		<div
			className={cls(
				className,
				size === "default" ? "container" : styles[size],
			)}
		>
			{children}
		</div>
	</section>
);
