import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';
import { useCallback, useEffect } from 'react';

const MainActivity = () => {
	const { push } = useFlow();

	const onClickSave = useCallback(() => {
		console.log((window as any).fs);
		(window as any).fs.saveData('Hello, World!');
	}, [(window as any)?.fs]);

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

			<button onClick={onClickSave}>저장</button>
		</AppScreen>
	);
};

export default MainActivity;
