import { Footer, Header } from "@/sections";
import styles from "./App.module.css";
import { Home } from "./pages/Home/Home";

const App = () => {
	return (
		<div className={styles.root}>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</div>
	);
};

export default App;
