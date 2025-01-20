import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

    const x = 0;

export default function edit() {
	const blockProps = useBlockProps();
	return <p { ...blockProps }>Edit JSX</p>;
}
