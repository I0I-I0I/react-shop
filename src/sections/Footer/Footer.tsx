import { SocialItem, SocialList } from "@/blocks";
import { InputWithButton } from "@/components";
import { Link, Logo, Typography } from "@/components/UI";
import { Col, ColItem } from "@/sections/Footer/components";
import cls from "@/utils/cls";
import styles from "./Footer.module.css";

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

export const Footer = () => (
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
								<Link
									component="link"
									variant="default"
									size="default"
									href={value.link}
								>
									{value.value}
								</Link>
							</ColItem>
						))}
					</Col>
				))}
			</div>
		</div>
		<div className={styles.footer__bottom}>
			<div className={cls(styles.footer__bottomInner, "container")}>
				<Typography tag="span" variant="text" className={styles.copyright}>
					©Webecy - All Rights Reserved
				</Typography>
				<SocialList size="medium">
					<SocialItem
						href="#"
						size="medium_small"
						src="/icons/facebook-small.svg"
						alt="link to facebook"
					/>
					<SocialItem
						href="#"
						size="medium_small"
						src="/icons/instagram-small.svg"
						alt="link to instagram"
					/>
					<SocialItem
						href="#"
						size="medium_small"
						src="/icons/twitter-small.svg"
						alt="link to twitter"
					/>
				</SocialList>
			</div>
		</div>
	</footer>
);
