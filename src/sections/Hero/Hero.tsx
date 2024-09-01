import { Link, Typography } from "@/components/UI";
import cls from "@/utils/cls";
import styles from "./Hero.module.css";
import { Section } from "@/sections";

type BreadcrumbsType = {
	value: string;
	link: string;
};

interface HeroProps {
	className?: string;
	title: string;
	breadcrumbs?: BreadcrumbsType[];
}

export const Hero = ({ className = "", title, breadcrumbs }: HeroProps) => (
	<Section className={cls(className, styles.hero, "container")}>
		<Typography tag="h1" variant="title-3">
			{title}
		</Typography>
		{breadcrumbs && (
			<ul className="breadcrumbs">
				{breadcrumbs.map((item) => (
					<Link component="link" href={item.link}>
						{item.value}
					</Link>
				))}
			</ul>
		)}
	</Section>
);
