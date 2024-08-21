import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';

const MainActivity = () => {
	const { push } = useFlow();

	return (
		<AppScreen>
			<div>Main Activity</div>
			<button
				onClick={() => {
					push('NextActivity', {});
				}}
			>
				Next
			</button>
		</AppScreen>
	);
};

export default MainActivity;
