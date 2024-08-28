import { useState } from "react";
import styles from "./Dropdown.module.css";
import cls from "@/utils/cls";

type OpenOnType =
	| "hover"
	| "click";

type ComponentType =
	| "button"
	| "a";

type OptionsLinkType = {
	value: string,
	linkTo?: { href: string },
};

interface DropdownProps {
	options: OptionsLinkType[];
	openOn?: OpenOnType;
	component?: ComponentType;
	disableSwitchMode?: boolean;
	className?: string;
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

export const Dropdown = ({
	options,
	className = "",
	openOn = "click",
	disableSwitchMode = false,
	component = "button"
}: DropdownProps) => {
	const [currentItem, setCurrentItem] = useState(options[0]);
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = (item: OptionsLinkType) => {
		if (disableSwitchMode) return;
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
	const Component = component;

	return (
		<div
			className={cls(styles.dropdown, className)}
			{...mode.dropdown}
		>
			<button
				className={cls(styles.item, styles.currentItem)}
				{...mode.currentItem}
			>
				{currentItem.value}
			</button>
			{ isOpen &&
				<ul className={cls(styles.dropdownContent)}>
					{
						options.map((option) => (
							<li className={styles.dropdownItem}>
								<Component
									onClick={() => handleOnClick(option)}
									className={styles.item}
									{...option?.linkTo}
								>{option.value}
								</Component>
							</li>
						)
					)}
				</ul>
			}
		</div>
	)
}
