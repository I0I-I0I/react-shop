import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Link from "./components/UI/Link/Link";
import styles from "./App.module.css";

const App = () => {
	return (
		<div className={styles.root}>
			<Header />
			<main>
				<Link href="#" variant="default">Hello</Link>
			</main>
			<Footer />
		</div>
	);
};

export default App;
