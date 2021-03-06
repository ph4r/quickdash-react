import React, {	Component } from 'react';
import _ from 'lodash';

import { Widget } from '../';

import './battery.widget.scss';

export class BatteryWidget extends Component {
	static propTypes = {
		devices: React.PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);

		this.props = props;

		this.allGood = this.allGood.bind(this);
		this.badThings = this.badThings.bind(this);
	}

	allGood() {
		return !_.find(this.props.devices, { battery: 'open' });
	}

	badThings() {
		return _.filter(this.props.devices, { battery: 'open' });
	}

	render() {
		const visual = (
			<div className="window-frame">
				<div className="window">
					<div className="pane top" />
					<div className="pane bottom" />
				</div>
			</div>
		);

		return (
			<Widget
				class="widget-battery"
				allGood={ this.allGood() }
				statusGood="closed"
				statusBad="open"
				badDevices={ this.badThings() }
				visual={ visual }
				listPath="/battery" />
		);
	}
}
