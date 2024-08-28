import { Link, Dropdown, Logo, TextWithIcon, Search } from "@/components/UI";
import { LinkDropdown } from "./LinkDropdown/LinkDropdown";
import styles from "./Header.module.css";
import cls from "@/utils/cls";

const data = {
	languages: [
		"English",
		"Russian",
		"Bulgar",
		"Ukrain"
	],
	currency: [
		"USD",
		"RUB"
	]
}

export const Header = () => (
	<header className={styles.header}>
		<div className={styles.header__top}>
			<ul className={cls(styles.contacts__list, styles.header__list)}>
				<li className={styles.contacts__item}>
					<Link href="mailto:mhhasanul@gmail.com" className={styles.contacts__iconWrapper}>
						<TextWithIcon src="/icons/mail.svg" direction="left">mhhasanul@gmail.com</TextWithIcon>
					</Link>
				</li>
				<li className={styles.contacts__itemWrapper}>
					<Link href="tel:(12345)67890" className={styles.contacts__iconWrapper}>
						<TextWithIcon src="/icons/phone.svg" direction="left">(12345)67890</TextWithIcon>
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
					<Link href="#">
						<TextWithIcon src="/icons/user.svg" gap="2px">Login</TextWithIcon>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link href="#">
						<TextWithIcon src="/icons/heart-alt.svg" gap="2px">Wishlist</TextWithIcon>
					</Link>
				</li>
				<li className={styles.header__item}>
					<Link className="" href="#" aria-label="Card">
						<TextWithIcon src="/icons/card.svg" gap="0px" size="medium"><span className="visually-hidden">Card</span></TextWithIcon>
					</Link>
				</li>
			</ul>
		</div>
		<div className={styles.header__bottom}>
			<Logo />
			<nav className={styles.nav}>
				<ul className={cls(styles.nav__list)}>
					<li>
						<Dropdown>
							<Link href="#">Hero</Link>
							<Link href="#">About</Link>
							<Link href="#">What</Link>
							<Link href="#">Idk</Link>
						</Dropdown>
					</li>
					<li>
						<Link href="#">Pages</Link>
					</li>
					<li>
						<Link href="#">Products</Link>
					</li>
					<li>
						<Link href="#">Blog</Link>
					</li>
					<li>
						<Link href="#">Shop</Link>
					</li>
					<li>
						<Link href="#">Contacts</Link>
					</li>
				</ul>
			</nav>
			<Search />
		</div>
	</header>
);
