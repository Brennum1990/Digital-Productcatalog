import {defineField} from 'sanity'

export default ({
	name: 'movie',
	title: 'Movie',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
		 	type: 'string',
		}),
		defineField({
		 	name: 'slug',
		 	title: 'Slug',
		 	type: 'slug',
		 	options: {
				source: 'title',
				maxLength: 100,
			},
		}),
		defineField({
		 	name: 'releaseDate',
		 	title: 'Release date',
		 	type: 'date',
		 	options: {
				dateFormat: 'YYYY',
			}
		}),
		defineField({
		 	name: 'poster',
		 	title: 'Poster Image',
		 	type: 'image',
		 	options: {
				hotspot: true,
		 	},
	  	}),
	  	defineField({
		 	name: 'externalId',
		 	title: 'External ID',
		 	type: 'number',
	  	}),
	  	defineField({
		 	name: 'popularity',
		 	title: 'Popularity',
		 	type: 'number',
	  	}),
	  	defineField({
			title: 'Category',
			name: 'category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'category'}]
				}
			]
	  	}),
	],
})