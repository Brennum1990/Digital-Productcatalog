export default Structure => {
	const {divider, editor, list, listItem, documentTypeList, documentTypeListItem} = Structure;

	return list()
		.title('Nicolas Cage content')
			.showIcons(false)
			.items([
				documentTypeListItem('movie'),

				divider(),

				documentTypeListItem('genre'),
				documentTypeListItem('settings'),
			])
}