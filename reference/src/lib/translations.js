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
			purpose1: {
				title: 'Performance',
				menu: 'Performance',
				description: `These cookies are used to analyse how visitors use our website, for instance which pages visitors visit most often, in order to provide a better user experience. This information is already stored or access on your device such as advertising identifiers, device identifiers, cookies, and similar technologies.`
			},
			purpose2: {
				title: 'Personalisation',
				menu: 'Personalisation',
				description: `Cookies and similar technologies are used to improve your experience, to do things like: remember your login, general preferences, personalise content, search, recommendations. Without these technologies, things like personalised recommendations, your account preferences may not work correctly.`
			},
			purpose3: {
				title: 'Advertising',
				menu: 'Advertising',
				description: `Ads keep our content FREE for everyone. Please note that by altering the settings below, you'll still receive ads, but these will not be personalised to you. Advertising cookies are used to limit the number of times you see an advertisement, or to customise advertising on our website and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns. `
			},
			purpose4: {
				title: 'Social Media',
				menu: 'Social Media',
				description: `Social media cookies allow you to log in to your social networks and share content from our website through social media.`
			},
			purpose5: {
				title: 'Measurement',
				menu: 'Measurement',
				description: `The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content, and/or advertising for you in other contexts, i.e. on other services, such as websites or apps, over time.`
			},
			purpose6: {
				title: 'Required',
				menu: 'Required',
				description: `Some of the technologies we use are necessary for critical functions like security and site integrity, account authentication, security and privacy preferences, internal site usage and maintenance data, and to make the site work correctly for browsing and transactions.`
			},
			purpose7: {
				title: '3rd Party Games',
				menu: '3rd Party Games',
				description: `By changing this setting, you will or will not be able to play 3rd party games on our website. 3rd party games often include tracking cookies from advertisers or social media features. You may also be required to register in the games in order to play them. Please note that we do not control these games or what happens with the data that is shared.By changing this setting, you will or will not be able to play 3rd party games on our website. 3rd party games often include tracking cookies from advertisers or social media features. You may also be required to register in the games in order to play them. Please note that we do not control these games or what happens with the data that is shared.`
			}
		},
		features: {
			feature1: {
				name: "Matching Data to Offline Sources",
				description: "Combining data from offline sources that were initially collected in other contexts."
			},
			feature2: {
				name: "Linking Devices",
				description: "Allow processing of a user's data to connect such user across multiple devices."
			},
			feature3: {
				name: "Precise Geographic Location Data",
				description: "Allow processing of a user's precise geographic location data in support of a purpose for which that certain third party has consent."
			}
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

