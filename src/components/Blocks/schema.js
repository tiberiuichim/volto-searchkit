const SearchKitBlockSchema = {
  title: 'Searchkit Block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['url'],
    },
  ],

  properties: {
    url: {
      title: 'ES URL',
    },
  },

  required: ['url'],
};

export default SearchKitBlockSchema;