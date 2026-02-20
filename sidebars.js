module.exports = {
  Sidebar: [

    /**
     * COMEÇANDO
     */
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      items: [
        'introduction',
        'install',
        {
          type: 'category',
          label: 'Gulp and LiveReload',
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
      label: 'Configurations',
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
      label: 'Guides',
      collapsed: false,
      items: [
        'controllers',
        'rest',
        'views',
        'helpers',
        'routes',
      ],
    },

    /**
     * REFERENCIAS
     */
    {
      type: 'category',
      label: 'References',
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
