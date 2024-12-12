import { useState, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
	const [scroll, setScroll] = useState({
		x: window.scrollX,
		y: window.scrollY,
	});

	const updateScroll = useCallback(() => {
		setScroll({
			x: window.scrollX,
			y: window.scrollY,
		});
	}, []);

	useWindowEvent('scroll', updateScroll);

	const scrollTo = useCallback(({ x = window.scrollX, y = window.scrollY }) => {
		window.scrollTo({ left: x, top: y, behavior: 'smooth' });
	}, []);

	return [scroll, scrollTo];
}
