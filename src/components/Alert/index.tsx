import { useTranslation } from "react-i18next";
type AlertProps = {
	text?: string;
};

export function Alert({ text }: AlertProps) {
	const { t } = useTranslation();

	return <div className="flex justify-center items-center flex-col gap-[12px] py-8">
		<svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M26.1608 3.25436L41.3041 29.5359C41.6373 30.3203 41.7831 30.9582 41.8248 31.6209C41.9081 33.1692 41.3666 34.6741 40.3042 35.8322C39.2419 36.9862 37.8047 37.6674 36.2424 37.75H5.74755C5.10183 37.7108 4.4561 37.5642 3.85204 37.3371C0.831715 36.1191 -0.626372 32.6923 0.602587 29.7217L15.85 3.23578C16.3708 2.30475 17.1623 1.5017 18.1413 0.985612C20.9742 -0.585374 24.5777 0.446811 26.1608 3.25436ZM22.8072 20.5744C22.8072 21.5653 21.9948 22.3931 20.995 22.3931C19.9952 22.3931 19.162 21.5653 19.162 20.5744V14.7343C19.162 13.7414 19.9952 12.9383 20.995 12.9383C21.9948 12.9383 22.8072 13.7414 22.8072 14.7343V20.5744ZM20.995 29.4533C19.9952 29.4533 19.162 28.6255 19.162 27.6366C19.162 26.6437 19.9952 25.8179 20.995 25.8179C21.9948 25.8179 22.8072 26.6251 22.8072 27.6139C22.8072 28.6255 21.9948 29.4533 20.995 29.4533Z" fill="#242529"/>
		</svg>
		<p>{text ? t(text) : t('noResults')}</p>
	</div>;
}