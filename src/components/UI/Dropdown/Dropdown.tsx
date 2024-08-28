import { useState } from "react";
import styles from "./Dropdown.module.css";
import cls from "@/utils/cls";

type OpenOnType =
	| "hover"
	| "click";

interface DropdownProps {
	options: string[];
	openOn?: OpenOnType;
}

interface IMode {
	dropdown?: {
		onMouseOver: () => void;
		onMouseLeave: () => void;
	};
	currentItem?: {
		onClick: () => void;
	};
}

export const Dropdown = ({ options, openOn = "click" }: DropdownProps) => {
	const [currentItem, setCurrentItem] = useState(options[0]);
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = (item: string) => {
		setIsOpen(false);
		setCurrentItem(item);
	};

	const modeList = {
		"hover":{
			dropdown: {
				onMouseOver: () => setIsOpen(true),
				onMouseLeave: () => setIsOpen(false),
			}
		},
		"click":{
			currentItem: {
				onClick: () => setIsOpen((state) => !state),
			}
		}
	};

	const mode: IMode = modeList[openOn];

	return (
		<div
			className={styles.dropdown}
			{...mode.dropdown}
		>
			<button
				className={cls(styles.item, styles.currentItem)}
				{...mode.currentItem}
			>
				{currentItem}
			</button>
			{ isOpen &&
				<ul className={cls(styles.dropdownContent)}>
					{
						options.map((option) => (
							<li className={styles.dropdownItem}>
								<button
									onClick={() => handleOnClick(option)}
									className={styles.item}
								>{option}
								</button>
							</li>
						)
					)}
				</ul>
			}
		</div>
	)
}
