import { Slider } from "@/blocks";
import { Link, Typography } from "@/components/UI";
import { Section } from "@/sections";

import { Pagination, Autoplay } from "swiper/modules";

import styles from "./HomeHero.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import cls from "@/utils/cls";

export const HomeHero = () => (
	<Section size="free" className={styles.hero}>
		<div className={cls("container", styles.hero__content)}>
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
		</div>
		<Slider
			pagination="rhombus"
			className={styles.hero__slider}
			modules={[Pagination, Autoplay]}
			autoplay={{ delay: 3000 }}
			slidesPerView={1}
			spaceBetween={0}
			style={{ position: "absolute", zIndex: "0", top: "0" }}
		>
			{["/images/home/hero-bg.jpg", "/images/home/hero-bg.jpg", "/images/home/hero-bg.jpg"].map((item) => (
				<div
					className={styles.hero__bgImg}
					style={{ backgroundImage: `url(${item})` }}
				/>
			))}
		</Slider>
	</Section>
);

