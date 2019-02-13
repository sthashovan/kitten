import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Kitten.less';
// import Spottable from '@enact/spotlight/Spottable';

const KittenBase = kind({
	name: 'Kitten',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		onSelect: PropTypes.func,
		size: PropTypes.number
	},

	styles: {
		css,
		className: 'kitten'
	},

	defaultProps: {
		size: 300
	},

	handlers: {
		onSelect: (ev, {index, onSelect}) => {
			if (onSelect) {
				onSelect({index});
			}
		}
	},

	computed: {
		url: ({index, size}) => {
			return `//loremflickr.com/${size}/${size}/kitten?random=${index}`;
		}
	},

	render: ({children, onSelect, url, ...rest}) => {
		return(
			<div {...rest} onClick={onSelect}>
				<img src={url} />
				<div>{children}</div>
			</div>
		);
	}
});

// const Kitten = Spottable(KittenBase);

export default KittenBase;
export {KittenBase as Kitten}; //