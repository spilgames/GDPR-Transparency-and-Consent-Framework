import { h, Component } from 'preact';
import style from './vendors.less';
import Button from '../../../button/button';
import Switch from '../../../switch/switch';
import Label from "../../../label/label";

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'vendors'
	};
}

export default class Vendors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editingConsents: false
		};
	}

	static defaultProps = {
		vendors: [],
		selectedVendorIds: new Set(),
		selectVendor: () => {}
	};

	handleAcceptAll = () => {
		this.handleMoreChoices();
		this.props.selectAllVendors(true);
	};

	handleRejectAll = () => {
		this.handleMoreChoices();
		this.props.selectAllVendors(false);
	};

	handleSelectVendor = ({ dataId, isSelected }) => {
		this.props.selectVendor(dataId, isSelected);
	};

	handleMoreChoices = () => {
		this.setState({
			editingConsents: true
		});
	};

	render(props, state) {

		const {
			vendors,
			selectedVendorIds,
		} = props;
		const { editingConsents } = this.state;

		return (
			<div class={style.vendors}>
				<div class={style.header}>
					<div class={style.title}>
						<LocalLabel localizeKey='title'>Our partners</LocalLabel>
					</div>
				</div>
				<div class={style.description}>
					<LocalLabel localizeKey='description'>
						Help us provide you with a better online experience! Our partners set cookies and collect information from your browser across the web to provide you with website content, deliver relevant advertising and understand web audiences.
					</LocalLabel>
					<div>
						<Button class={style.button} onClick={this.handleAcceptAll} localizeKey="acceptAll">Accept all</Button>
						<Button class={style.button} onClick={this.handleRejectAll} localizeKey="acceptNone">Reject all</Button>
						{!editingConsents &&
						<a onClick={this.handleMoreChoices}>
							<LocalLabel localizeKey='moreChoices'>Make More Choices</LocalLabel>
						</a>
						}
					</div>
				</div>
				<div class={style.vendorHeader}>
					<table class={style.vendorList}>
						<thead>
						<tr>
							<th><LocalLabel localizeKey='company'>Company</LocalLabel></th>
							{editingConsents &&
							<th><LocalLabel localizeKey='offOn'>Allow</LocalLabel></th>
							}
						</tr>
						</thead>
					</table>
				</div>
				<div class={style.vendorContent}>
					<table class={style.vendorList}>
						<tbody>
						{vendors.map(({ id, name, required, policyUrl }, index) => (
							<tr key={id} class={index % 2 === 1 ? style.even : ''}>
								<td>
									<div class={style.vendorName}>
										<a href={policyUrl} target='_blank' class={style.vendorLink}>{name}</a>
									</div>
								</td>
								{editingConsents && !required &&
								<td>
									<Switch
										dataId={id}
										isSelected={selectedVendorIds.has(id)}
										onClick={this.handleSelectVendor}
									/>
								</td>
								}
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
