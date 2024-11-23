import { useWindowScroll } from './hooks';
import './App.css';

export const App = () => {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<div className="container">
			<p className="info">
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button className="button" onClick={() => scrollTo({ y: 0 })}>
				Scroll to top
			</button>
			<div className="spacer"></div>
		</div>
	);
};
