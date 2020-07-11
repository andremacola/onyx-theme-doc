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
          label: 'Gulp e LiveReload',
          collapsed: false,
          items: ['gulp', 'javascripts', 'styles'],
          
        }
      ],
    },

    /**
     * CONFIGURAÇÕES
     */
    {
      type: 'category',
      label: 'Configurações',
      collapsed: false,
      items: [
        'app',
        'assets',
        'hooks',
        'images',
        'mail',
        'sidebars',
        'support',
        'cpts',
        'taxonomies',
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
        'controllers',
        'rest',
        'views',
        'helpers',
      ],
    },

    /**
     * REFERENCIAS
     */
    {
      type: 'category',
      label: 'Referências',
      collapsed: false,
      items: [
        'class-boot',
        'class-columns',
        'class-controller',
        'class-cpt',
        'class-setup',
        'class-sidebar',
        'class-taxonomy',
        'filters-actions'
      ],
    },

  ],
};
