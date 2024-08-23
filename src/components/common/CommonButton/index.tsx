import React from 'react';
import { StyledCommonButton } from './CommonButton.style';

interface CommonButtonProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right' | 'top' | 'bottom';
	onClick?: () => void;
	color?: string;
	gap?: string;
	style?: React.CSSProperties;
}

const CommonButton = (props: CommonButtonProps) => {
	const { children, icon, iconPosition, onClick, color, gap, style } = props;

	return (
		<StyledCommonButton onClick={onClick} color={color} gap={gap} iconPosition={iconPosition} style={style}>
			{children}
		</StyledCommonButton>
	);
};

export default CommonButton;
