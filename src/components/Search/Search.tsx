import { Button, Input } from "@/components/UI";
import { useId } from "react";
import styles from "./Search.module.css";

export const Search = () => {
	const id = useId();

	return (
		<search>
			<form action="" className={styles.search}>
				<label htmlFor={id} className="visually-hidden">
					search
				</label>
				<Input
					id={id}
					className={styles.input_search}
					placeholder="Search..."
				/>
				<Button variant="search">Search</Button>
			</form>
		</search>
	);
};

// <input type="search" id="header-search" />
