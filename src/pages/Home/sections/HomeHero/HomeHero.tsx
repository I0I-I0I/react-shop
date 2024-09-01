import { Link, Typography } from "@/components/UI";
import { Section } from "@/sections";
import styles from "./HomeHero.module.css";

export const HomeHero = () => (
	<Section className={styles.hero} src="/images/home/hero-bg.jpg">
		<div className={styles.hero__title_top}>
			<Typography tag="h1" variant="title-1" className={styles.hero__title}>
				New Furniture Collection Trends in 2020
			</Typography>
			<Typography
				tag="span"
				variant="text"
				className={styles.hero__under_title}
			>
				Best Furniture For Your Castle....
			</Typography>
		</div>
		<Typography tag="p" variant="text" className={styles.hero__desc}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
			adipiscing in phasellus non in justo.
		</Typography>
		<Link
			href="/catalog"
			className={styles.hero__button}
			component="button"
			variant="default"
			size="medium"
		>
			Shop Now
		</Link>
	</Section>
);
