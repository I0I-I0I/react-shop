import { Link } from '@/components/UI'
import styles from './LinkDropdown.module.css'
import cls from '@/utils/cls';

type DataType = {
	value: string,
	link: string
};

interface LinkDropdownProps {
	className?: string;
	data: DataType[];
}

export const LinkDropdown = ({ className = "", data }: LinkDropdownProps) => (
	<div className={cls(styles.linkDropdown__wrapper, className)}>
		<Link href="#" className={styles.linkDropdown}>Home</Link>
		<ul className={styles.linkDropdown__content}>
			{
				data.map(item => (
					<li>
						<Link href={item.link}>
							{item.value}
						</Link>
					</li>
				))
			}
		</ul>
	</div>
)
