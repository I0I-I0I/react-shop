import { Dropdown, Search, TextWithIcon } from "@/components";
import { Link, Logo } from "@/components/UI";
import cls from "@/utils/cls";
import styles from "./Header.module.css";

const data = {
	languages: [
		{ value: "English" },
		{ value: "Russian" },
		{ value: "Bulgar" },
		{ value: "Ukrain" },
	],
	currency: [{ value: "USD" }, { value: "RUB" }],
};

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.header__top}>
			<div className="container">
				<ul className={cls(styles.contacts__list, styles.header__list)}>
					<li className={styles.contacts__item}>
						<Link
							component="link"
							href="mailto:mhhasanul@gmail.com"
							noHover
							className={styles.contacts__iconWrapper}
						>
							<TextWithIcon src="/icons/mail.svg" direction="left">
								mhhasanul@gmail.com
							</TextWithIcon>
						</Link>
					</li>
					<li className={styles.contacts__itemWrapper}>
						<Link
							component="link"
							href="tel:(12345)67890"
							noHover
							className={styles.contacts__iconWrapper}
						>
							<TextWithIcon src="/icons/phone.svg" direction="left">
								(12345)67890
							</TextWithIcon>
						</Link>
					</li>
				</ul>
				<ul className={cls(styles.dropdown__list, styles.header__list)}>
					<li className={styles.dropdown__item}>
						<Dropdown options={data.languages}></Dropdown>
					</li>
					<li className={styles.dropdown__item}>
						<Dropdown options={data.currency}></Dropdown>
					</li>
				</ul>
				<ul className={styles.header__list}>
					<li className={styles.header__item}>
						<Link component="link" href="#">
							<TextWithIcon src="/icons/user.svg" gap="2px">
								Login
							</TextWithIcon>
						</Link>
					</li>
					<li className={styles.header__item}>
						<Link component="link" href="#">
							<TextWithIcon src="/icons/heart-alt.svg" gap="2px">
								Wishlist
							</TextWithIcon>
						</Link>
					</li>
					<li className={styles.header__item}>
						<Link component="link" className="" href="#" aria-label="Card">
							<TextWithIcon src="/icons/card.svg" gap="0px" size="medium">
								<span className="visually-hidden">Card</span>
							</TextWithIcon>
						</Link>
					</li>
				</ul>
			</div>
		</div>
		<div className={cls(styles.header__bottom, "container")}>
			<Logo />
			<nav className={styles.nav}>
				<ul className={cls(styles.nav__list)}>
					<li>
						<Dropdown
							className={styles.dropdownLink}
							openOn="hover"
							component="a"
							disableSwitchMode
							options={[
								{ value: "Home", linkTo: { href: "#" } },
								{ value: "About", linkTo: { href: "#" } },
							]}
						/>
					</li>
					<li>
						<Link component="link" href="#">
							Pages
						</Link>
					</li>
					<li>
						<Link component="link" href="#">
							Products
						</Link>
					</li>
					<li>
						<Link component="link" href="#">
							Blog
						</Link>
					</li>
					<li>
						<Link component="link" href="#">
							Shop
						</Link>
					</li>
					<li>
						<Link component="link" href="#">
							Contacts
						</Link>
					</li>
				</ul>
			</nav>
			<Search />
		</div>
	</header>
);
