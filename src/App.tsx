import { Header, Footer } from "@/components";
import styles from "./App.module.css";

const App = () => {
	return (
		<div className={styles.root}>
			<Header />
			<main>
				<div>Hello</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
