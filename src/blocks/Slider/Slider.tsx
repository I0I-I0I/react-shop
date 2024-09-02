import styles from "./Slider.module.css";
import "./SliderDefault.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import cls from "@/utils/cls";

type PaginationType = "cyrcle" | "rhombus" | "rectangle";

type SliderProps = SwiperOptions & {
	children: React.ReactNode[],
	pagination?: PaginationType,
	className?: string,
	variant?: string,
	style?: React.CSSProperties,
}

export const Slider = ({ className = "", pagination, children, style, ...props }: SliderProps) => (
	<Swiper
		className={cls(className)}
		pagination={pagination && {
			clickable: true,
			bulletClass: `sliderBullet_${pagination}`,
			bulletActiveClass: "sliderBullet_active",
		}}
		style={style}
		{...props}
	>
		{ children.map((item, index) => (
			<SwiperSlide key={`${index}-${item}`}>
				{children}
			</SwiperSlide>
		))}
	</Swiper>
)
