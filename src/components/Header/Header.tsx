import { Link, Typography } from "@/components/UI";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="logo">
				<img src="" alt="Logo" />
			</div>
			<Typography variant="title" tag="h1">Hello</Typography>
			<nav className="nav header__nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Link variant="small" className="nav__link" href="#">
							Home
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" href="#">
							Products
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" href="#">
							Account
						</Link>
					</li>
					<li className="nav__item">
						<Link className="nav__link" href="#">
							Card
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
