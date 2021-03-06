import { h, Component } from 'preact';
import style from './intro.less';
import Button from '../../button/button';
import Label from '../../label/label';
import CloseButton from '../../closebutton/closebutton';

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'intro'
	};
}

const HOST_PARTS = ((window && window.location && window.location.hostname) || '').split('.');

export default class Intro extends Component {

	static defaultProps = {};

	render(props, state) {

		const {
			onAcceptAll,
			onShowPurposes,
			onShowVendors,
			onShowFeatures,
			onClose
		} = props;

		return (
			<div class={style.intro}>
				<CloseButton
					class={style.close}
					onClick={onClose}
				/>
				<div class={style.title}>
					<LocalLabel localizeKey='title'>A privacy reminder</LocalLabel>
				</div>
				<div class={style.introWrap}>
					<div class={style.description}>
						<LocalLabel localizeKey='description'>
							We use your data to help bring you personalised content, relevant ads, social media features, and to better understand how you use our website. To do this, we sometimes share this data with social media, advertising, and analytics partners, who may in turn combine it with other data you've given them. Visit our Privacy Policy for more information on our data collection practices.
						</LocalLabel>
					</div>
					<div class={style.actions}>
						<Button
							class={style.acceptAll}
							onClick={onAcceptAll}
						>
							<LocalLabel localizeKey='acceptAll'>Accept</LocalLabel>
						</Button>
						<Button
							onClick={onShowPurposes}
							class={style.showSettings}
							invert='true'
						>
							<LocalLabel localizeKey='showPurposes'>Settings</LocalLabel>
						</Button>
					</div>
				</div>
				<div class={style.links}>
					<a onClick={onShowVendors}>
						<LocalLabel localizeKey='showVendors'>Vendor List</LocalLabel>
					</a>
					<span> | </span>
					<a href="/privacy" target="_blank">
						<LocalLabel localizeKey='privacyPolicy'>Privacy Policy</LocalLabel>
					</a>
					<span> | </span>
					<a onClick={onShowFeatures}>
						<LocalLabel localizeKey='features'>Features</LocalLabel>
					</a>
				</div>
			</div>
		);
	}
}
