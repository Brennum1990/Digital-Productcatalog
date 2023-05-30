export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Visible',
			name: 'visible',
			type: 'boolean'
		},
	],
	
	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}