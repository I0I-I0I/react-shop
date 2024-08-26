import styles from "./Header.module.css";

const Header = () => {
	return (
	 <header className={styles.header}>
			<div className="logo"><img src="" alt="Logo" /></div>
			<nav className="nav header__nav">
				<ul className="nav__list">
					<li className="nav__item"><a className="link nav__link" href="#">Home</a></li>
					<li className="nav__item"><a className="link nav__link" href="#">Products</a></li>
					<li className="nav__item"><a className="link nav__link" href="#">Account</a></li>
					<li className="nav__item"><a className="link nav__link" href="#">Card</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
