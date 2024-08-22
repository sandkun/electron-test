import { Linter } from 'eslint';
import React, { useMemo } from 'react';

const TYPE_MAP = {
	dispaly1: {
		fontSize: '4.5rem',
		fontWeight: 200,
		lineHeight: '140%',
		letterSpacing: '-0.09rem',
	},
	display2: {
		fontSize: '4rem',
		fontWeight: 200,
		lineHeight: '140%',
		letterSpacing: '-0.08rem',
	},
	title1: {
		fontSize: '4.5rem',
		fontWeight: 500,
		lineHeight: '135%',
		letterSpacing: '-0.0675rem',
	},
	title2: {
		fontSize: '4rem',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: '-0.06rem',
	},
	title3: {
		fontSize: '3.5rem',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: '-0.07rem',
	},
	subtitle1: {
		fontSize: '3rem',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: '-0.06rem',
	},
	subtitle2: {
		fontSize: '3rem',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: '-0.06rem',
	},
	subtitle3: {
		fontSize: '2.5rem',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: '-0.05rem',
	},
	body1: {
		fontSize: '3rem',
		fontWeight: 400,
		lineHeight: '140%',
	},
	body2: {
		fontSize: '2.75rem',
		lineHeight: '140%',
	},
	body3: {
		fontSize: '2.5rem',
		lineHeight: '140%',
	},
	body4: {
		fontSize: '2.25rem',
		lineHeight: '140%',
	},
	btn1: {
		fontSize: '3.5rem',
		lineHeight: '140%',
		letterSpacing: '-0.07rem',
	},
	btn2: {
		fontSize: '3rem',
		fontWeight: 500,
		lineHeight: '140%',
		letterSpacing: '-0.06rem',
	},
	btn3: {
		fontSize: '2.5rem',
		fontWeight: 500,
		lineHeight: '140%',
		letterSpacing: '-0.05rem',
	},
};

type TypographyType = keyof typeof TYPE_MAP;

interface TypographyProps {
	children: React.ReactNode;
	type?: TypographyType;
	fontSize?: string;
	fontWeight?: number;
	lineHeight?: string;
	letterSpacing?: string;
}

const Typography = (props: TypographyProps): React.ReactElement => {
	const { children, type, fontSize, fontWeight, lineHeight, letterSpacing } = props;

	const style = useMemo(() => {
		const typeStyle: React.CSSProperties | null = type ? TYPE_MAP[type] : null;
		return {
			fontSize: fontSize || typeStyle?.fontSize,
			fontWeight: fontWeight || typeStyle?.fontWeight,
			lineHeight: lineHeight || typeStyle?.lineHeight,
			letterSpacing: letterSpacing || typeStyle?.letterSpacing,
		};
	}, []);

	return <div style={style}>{children}</div>;
};

export default Typography;
