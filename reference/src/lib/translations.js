/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component.
 */
export default {
	en: {
		intro: {
			title: 'Your privacy settings',
			description: 'We use cookies to bring you personalized content, relevant ads, social media features, and to better understand how you use our website. (e.g IP Address) To do this, we sometimes share this data with social media, advertising, and analytics partners, who may in turn combine it with other data you\'ve given them. Your data may be stored by us and our service providers. In case the applicable data protection laws provide so, you may access, rectify, and erase the data or you may restrict or object to our processing of your data. Please contact us in such event. Click the "SETTINGS" button to change your privacy settings and learn more about our use of cookies, or click "ACCEPT" to agree with the above mentioned. You can change your mind and change your consent choices at any time by returning to this site.',
			acceptAll: 'Accept',
			privacyPolicy: 'Privacy policy',
			showPurposes: 'Settings'
		},
		details: {
			title: 'YOUR PRIVACY SETTINGS',
			back: 'CLOSE',
			save: 'SAVE SETTINGS'
		},
		purposes: {
			showVendors: 'Show full vendor list',
			active: 'Active',
			inactive: 'Inactive',
		},
		vendors: {
			title: 'Information We Collect About You',
			description: 'We and our partners use your data for the following purposes:<ul><li>To help us understand how you use our website and to research and improve features and services.</li> <li>To ensure that we can remember the website preferences you select and provide you with customized content.</li> <li>To show relevant advertisements and to allow you to share content via Social Media.</li> <li>Other functionalities that are necessary for providing you with our gaming services such as payments.</li> </ul>',
			acceptAll: 'Accept all',
			acceptNone: 'Reject all',
			purposes: 'Purposes',
			legitimateInterestPurposes: 'Legitimate Interest Purposes'
		}
	}
};

