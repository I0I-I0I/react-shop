import { InputWithButton } from "@/components";
import styles from "./Footer.module.css";
import { Link, Logo, Typography } from "@/components/UI";
import { Col, ColItem } from "@/sections/Footer/components";
import { SocialList } from "@/blocks";
import cls from "@/utils/cls";

const data = [
	{
		title: "Categories",
		values: [
			{ value: "Laptops & Computers", link: "#" },
			{ value: "Cameras & Photography", link: "#" },
			{ value: "Smart Phones & Tablets", link: "#" },
			{ value: "Video Games & Consoles", link: "#" },
			{ value: "Waterproof Headphones", link: "#" },
		],
	},
	{
		title: "Customer Care",
		values: [
			{ value: "My Account", link: "#" },
			{ value: "Discount", link: "#" },
			{ value: "Returns", link: "#" },
			{ value: "Orders History", link: "#" },
			{ value: "Order Tracking", link: "#" },
		],
	},
	{
		title: "Pages",
		values: [
			{ value: "Blog", link: "#" },
			{ value: "Browse the Shop", link: "#" },
			{ value: "Category", link: "#" },
			{ value: "Pre-Built Pages", link: "#" },
			{ value: "Visual Composer Elements", link: "#" },
			{ value: "WooCommerce Pages", link: "#" },
		],
	},
];

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={cls(styles.footer__top)}>
				<div className={cls(styles.footer__inner, "container")}>
					<div>
						<Logo className={styles.footer__logo} />
						<InputWithButton
							placeholder="Enter Email Address"
							buttonText="Sign Up"
							className={styles.footer__signUp}
						/>
						<address className={styles.footer__address}>
							<Typography variant="text" tag="span">
								Contact info
							</Typography>
							17 Princess Road, London, Greater London NW1 8JR, UK
						</address>
					</div>
					{data.map((item) => (
						<Col title={item.title}>
							{item.values.map((value) => (
								<ColItem className={styles.footer__link}>
									<Link href={value.link}>{value.value}</Link>
								</ColItem>
							))}
						</Col>
					))}
				</div>
			</div>
			<div className={cls(styles.footer__bottom)}>
				<div className={cls(styles.footer__bottomInner, "container")}>
					<span className={styles.copyright}>
						©Webecy - All Rights Reserved
					</span>
					<SocialList />
				</div>
			</div>
		</footer>
	);
};
