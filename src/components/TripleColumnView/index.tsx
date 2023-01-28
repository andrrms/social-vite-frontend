import { FC, PropsWithChildren } from 'react';

import { ColumnsViewContainer } from './styles';
import { ColumnsViewProps } from './types';

const ColumnsView: FC<PropsWithChildren<ColumnsViewProps>> = ({
	children,
	columns = 3,
}) => {
	return (
		<ColumnsViewContainer columns={columns}>{children}</ColumnsViewContainer>
	);
};

export default ColumnsView;
