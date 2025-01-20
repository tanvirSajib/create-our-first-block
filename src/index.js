import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";
import Save from "./save";

import './style.scss';

registerBlockType( 'blocks-course/firstblock', {
	edit,
	save: Save,
} );
