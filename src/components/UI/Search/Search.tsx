import { useId } from "react";
import { Button } from "../Button/Button";
import styles from "./Search.module.css";

export const Search = () => {
	const id = useId();

	return (
		<search>
			<form action="" className={styles.search}>
				<label htmlFor={id} className="visually-hidden">search</label>
				<input id={id} className={styles.input} placeholder="Search..."/>
				<Button variant="search">Search</Button>
			</form>
		</search>
	)
}

// <input type="search" id="header-search" />
