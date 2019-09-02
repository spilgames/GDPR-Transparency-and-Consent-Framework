import { h, Component } from 'preact';
import style from './features.less';

export default class Features extends Component {
	state = {
		selectedFeatureIndex: 0
	};

	static defaultProps = {
		features: []
	};
	
	handleSelectFeatureDetail = index => {
		return () => {
			this.setState({
				selectedFeatureIndex: index
			});
		};
	};

	render(props, state) {

		const {
			features
		} = props;

		const {selectedFeatureIndex} = state;
		const selectedFeature = features[selectedFeatureIndex];

		return (
			<div class={style.features}>
				<div class={style.featureList}>
					{features.map((feature, index) => (
						<div class={[style.featureItem, selectedFeatureIndex === index ? style.selectedFeature : ''].join(' ')}
							 onClick={this.handleSelectFeatureDetail(index)}
						>
							{feature.name}
						</div>
					))}
				</div>
				{selectedFeature &&
				<div class={style.featureDescription}>
					<div class={style.featureDetail}>
						<div class={style.detailHeader}>
							<div class={style.title}>
								{selectedFeature.name}
							</div>
						</div>
						<div class={style.body}>
							{selectedFeature.description}
						</div>
					</div>
				</div>
				}
			</div>
		);
	}
}
