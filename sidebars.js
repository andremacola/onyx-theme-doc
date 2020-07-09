module.exports = {
  Sidebar: [

    /**
     * COMEÇANDO
     */
    {
      type: 'category',
      label: 'Começando',
      collapsed: false,
      items: [
        'introduction',
        'install',
        {
          type: 'category',
          label: 'Gulpe e LiveReload',
          collapsed: false,
          items: ['gulp', 'javascripts', 'styles'],
          
        }
      ],
    },

    /**
     * GUIAS
     */
    {
      type: 'category',
      label: 'Guias',
      collapsed: false,
      items: [
        'helpers',
      ],
    },

  ],
};
