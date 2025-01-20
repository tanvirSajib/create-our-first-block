// var registerBlockType = wp.blocks.registerBlockType;
// var createElement = wp.element.createElement;

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocks-course/firstblock', {
	edit: function () {
		return <p className="class tanvir">Edit js</p>;
	},
	save: function () {
		return <p className="class tanvir">Save js</p>;
	},
} );
