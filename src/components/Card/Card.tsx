import cls from "@/utils/cls";
import { Typography } from "../UI";
import styles from "./Card.module.css";

type VariantType =
	| "default"
	| "rounded"
	| "large"
	| "mini"
	| "small"
	| "featured"
	| "wide";

type DefaultCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
	price_sale?: string,
}

type RoundedCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
}

type FeaturedCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
	code: string,
}

type WideCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
	price_sale?: string,
	stars: number,
	desc: string,
}

type MiniCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
}

type LargeCardType = {
	src: string,
	alt: string,
	title: string,
	price: string,
	price_sale?: string,
}

type CardType<T extends VariantType> = T extends "default"
	? DefaultCardType
	: T extends "featured"
		? FeaturedCardType
		: T extends "wide"
			? WideCardType
			: T extends "mini"
				? MiniCardType
				: T extends "large"
					? LargeCardType
					: T extends "rounded"
						? RoundedCardType
						: never

interface CardProps<T extends VariantType> {
	className?: string;
	data: CardType<T>;
	variant: T;
}

export const Card = <T extends VariantType>({
	className = "",
	data,
	variant,
}: CardProps<T>) => (
	<div className={cls(styles.card, styles[variant], className)}>
		<img src={data.src} alt={data.alt} />
		<Typography tag="span" variant="text_large">Product Name</Typography>
		<ul className="colors__list">
			<li className="colors__item"></li>
			<li className="colors__item"></li>
			<li className="colors__item"></li>
		</ul>
		<Typography tag="span" variant="text_small">Code - Y523201</Typography>
		<Typography tag="span" variant="text_small">$42.00</Typography>
	</div>
);
