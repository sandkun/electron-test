import styled from '@emotion/styled';
import { Gray_01, Gray_05 } from '../../../utils/Colors';

interface StyledCommonButtonProps {
	color?: string;
	gap?: string;
	iconPosition?: 'left' | 'right' | 'top' | 'bottom';
}

export const StyledCommonButton = styled.div<StyledCommonButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${({ gap }) => gap || '1rem'};
	background-color: ${({ color }) => color};
	color: ${({ color }) => (color ? '#fff' : Gray_01)};
	border: ${({ color }) => (color ? 'none' : `1px solid ${Gray_05}`)};
	flex-direction: ${({ iconPosition }) => {
		switch (iconPosition) {
			case 'left':
				return 'row';
			case 'right':
				return 'row-reverse';
			case 'top':
				return 'column';
			case 'bottom':
				return 'column-reverse';
			default:
				return 'row';
		}
	}};
	cursor: pointer;
	user-select: none;
	&:hover {
		opacity: 0.8;
	}
`;
