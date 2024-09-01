import { Button, Input } from "@/components/UI";
import cls from "@/utils/cls";
import styles from "./InputWithButton.module.css";

interface InputWithButtonProps {
	buttonText: string;
	className: string;
	placeholder?: string;
}

export const InputWithButton = ({
	placeholder = "",
	buttonText,
	className,
}: InputWithButtonProps) => (
	<div className={cls(styles.wrapper, className)}>
		<Input placeholder={placeholder} />
		<Button className={styles.button} variant="contained">
			{buttonText}
		</Button>
	</div>
);
