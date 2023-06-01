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
			name: 'director',
			title: 'Director',
		 	type: 'string',
		}),
		defineField({
		 	name: 'releaseDate',
		 	title: 'Release date',
		 	type: 'string',
		}),
		defineField({
			name: 'runtime',
			title: 'Runtime',
		 	type: 'string',
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
		 	name: 'tagline',
		 	title: 'Tagline',
		 	type: 'string',
	  	}),
		defineField({
		 	name: 'plotSummary',
		 	title: 'Plot summary',
		 	type: 'text',
	  	}),
	  	defineField({
		 	name: 'externalId',
		 	title: 'External ID',
		 	type: 'number',
	  	}),
	  	defineField({
			title: 'Genre',
			name: 'genre',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'genre'}]
				}
			]
	  	}),
	],
})