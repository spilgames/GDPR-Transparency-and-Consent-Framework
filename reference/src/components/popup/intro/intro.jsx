import { h, Component } from 'preact';
import style from './intro.less';
import Button from '../../button/button';
import Label from '../../label/label';
import CloseButton from '../../closebutton/closebutton';
import config from '../../../lib/config.js';

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'intro'
	};
}

export default class Intro extends Component {

	static defaultProps = {};

	render(props, state) {

		const {
			onAcceptAll,
			onShowPurposes,
			onClose
		} = props;

		const { theme } = config;

		return (
			<div class={style.intro} data-theme={theme}>
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
					<div class={style.acceptBtnWrap}>
						<Button
							class={style.acceptAll}
							onClick={onAcceptAll}
						>
							<LocalLabel localizeKey='acceptAll'>Accept</LocalLabel>
						</Button>
					</div>
				</div>
				<div class={style.option}>
					<span
						class={style.rejectAll}
						onClick={onShowPurposes}
					>
						<LocalLabel localizeKey='showPurposes'>Settings</LocalLabel>
					</span>
				</div>
			</div>
		);
	}
}