(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(146)),b={id:"cpts",title:"Post Types Personalizados",sidebar_label:"Post Types"},c={id:"cpts",isDocsHomePage:!1,title:"Post Types Personalizados",description:"O Onyx prov\xea a possibilidade de cria\xe7\xe3o de Post Types personalizados que podem ser feitas de duas formas. A primeira por meio deste arquivo ./core/config/cpts.php e a outra \xe9 instanciando um objeto da classe \\Onyx\\Cpt().",source:"@site/docs/cpts.md",permalink:"/onyx-theme-doc/docs/cpts",editUrl:"https://github.com/andremacola/onyx-theme-doc/edit/master/website/docs/cpts.md",sidebar_label:"Post Types",sidebar:"Sidebar",previous:{title:"Recursos de Suporte do Tema",permalink:"/onyx-theme-doc/docs/support"},next:{title:"Taxonomias Personalizadas",permalink:"/onyx-theme-doc/docs/taxonomies"}},l=[{value:"Par\xe2metros",id:"par\xe2metros",children:[]},{value:"Criando Post Types",id:"criando-post-types",children:[]},{value:"Filtros de Pesquisa",id:"filtros-de-pesquisa",children:[]},{value:"Colunas Personalizadas",id:"colunas-personalizadas",children:[{value:"add",id:"add",children:[]},{value:"order",id:"order",children:[]},{value:"hide",id:"hide",children:[]},{value:"Exemplo de Uso",id:"exemplo-de-uso",children:[]}]},{value:"Instanciando um Post Type",id:"instanciando-um-post-type",children:[]}],i={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O ",Object(o.b)("em",{parentName:"p"},"Onyx")," prov\xea a possibilidade de cria\xe7\xe3o de Post Types personalizados que podem ser feitas de duas formas. A primeira por meio deste arquivo ",Object(o.b)("inlineCode",{parentName:"p"},"./core/config/cpts.php")," e a outra \xe9 instanciando um objeto da classe ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"class-cpt"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Onyx\\Cpt()")),"."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"par\xe2metros"},"Par\xe2metros"),Object(o.b)("p",null,"O \xfanico par\xe2metro obrigat\xf3rio \xe9 o ",Object(o.b)("inlineCode",{parentName:"p"},"name(s)")," do post type podendo ser uma ",Object(o.b)("em",{parentName:"p"},"string")," como podemos ver no ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"criando-post-types"}),Object(o.b)("em",{parentName:"a"},"Exemplo 1"))," ou um ",Object(o.b)("em",{parentName:"p"},"array")," como no ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"criando-post-types"}),Object(o.b)("em",{parentName:"a"},"Exemplo 2")),". O Onyx vai extrair automaticamente ",Object(o.b)("inlineCode",{parentName:"p"},"slug"),", ",Object(o.b)("inlineCode",{parentName:"p"},"labels"),", ",Object(o.b)("inlineCode",{parentName:"p"},"options")," caso n\xe3o sejam fornecidos assim como tentar\xe1 aplicar o ",Object(o.b)("em",{parentName:"p"},"plural")," nas labels necess\xe1rias."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Caso ",Object(o.b)("strong",{parentName:"p"},"n\xe3o fornecido"),", o par\xe2metro ",Object(o.b)("inlineCode",{parentName:"p"},"slug")," ser\xe1 utilizado para cria\xe7\xe3o do post type e \xe9 ele que dever\xe1 ser utilizado para queries e relacionamentos. Por padr\xe3o o ",Object(o.b)("inlineCode",{parentName:"p"},"slug")," \xe9 extra\xeddo do valor ",Object(o.b)("inlineCode",{parentName:"p"},"name")," transformado para o plural."),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"Ex: 'G\xeaneros de Filme' ter\xe1 como plural 'G\xeaneros de Filmes' e slug 'generos-de-filmes'.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"name(s)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string/array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nome do Post Type"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"icon")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\xcdcone do Post Type"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"labels")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Labels customizadas"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"options")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argumentos de funcionamento"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"filters")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filtros de pesquisa (selects) no admin"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"columns")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Registrar colunas personalizadas no admin"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Para saber as op\xe7\xf5es das ",Object(o.b)("inlineCode",{parentName:"p"},"labels")," e ",Object(o.b)("inlineCode",{parentName:"p"},"options"),", visite a documenta\xe7\xe3o do WordPress ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/register_post_type/"}),"register_post_type()")," e ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/get_post_type_labels/"}),"get_post_type_labels()")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Ao adicionar par\xe2metros como ",Object(o.b)("inlineCode",{parentName:"p"},"labels")," ou ",Object(o.b)("inlineCode",{parentName:"p"},"options"),", voc\xea n\xe3o precisa incluir todas as op\xe7\xf5es. Somente os par\xe2metros que voc\xea determinar ser\xe3o substitu\xeddos no modelo."))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"criando-post-types"},"Criando Post Types"),Object(o.b)("p",null,"Utilizando este m\xe9todo, voc\xea ",Object(o.b)("strong",{parentName:"p"},"n\xe3o precisa")," instanciar a classe ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"class-cpt"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Onyx\\Cpt()")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"  /*\n  |--------------------------------------------------------------------------\n  | My First Post Type (exemplo 1)\n  |--------------------------------------------------------------------------\n  */\n  [ 'My First CPT' ],\n\n  /*\n  |--------------------------------------------------------------------------\n  | My Second Post Type (exemplo 2)\n  |--------------------------------------------------------------------------\n  */\n  [\n    'names'   => [\n      'name'   => 'Product',   // required\n      'plural' => 'Products' , // optional\n      'slug'   => 'produtct' , // optional\n    ],\n    'icon' => 'dashicons-admin-post',\n    'labels'  => [\n      // all labels options from\n      // https://developer.wordpress.org/reference/functions/get_post_type_labels/\n    ],\n    'options' => [\n      // all available arguments from `register_post_type` except `labels`\n      // https://developer.wordpress.org/reference/functions/register_post_type/\n    ],\n  ],\n\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"filtros-de-pesquisa"},"Filtros de Pesquisa"),Object(o.b)("p",null,"Ao registrar uma ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"taxonomies"}),"Taxonomia")," personalizada, voc\xea pode tamb\xe9m adicionar filtros de pesquisa na tabela de listagem do admin do WordPress"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"\n  /*\n  |--------------------------------------------------------------------------\n  | Post type with custom admin filters\n  |--------------------------------------------------------------------------\n  */\n  [\n    'My First CPT',\n    'filters' => [ 'my-custom-tax', 'other-custom-tax' ],\n  ],\n\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"colunas-personalizadas"},"Colunas Personalizadas"),Object(o.b)("p",null,"Voc\xea pode ",Object(o.b)("strong",{parentName:"p"},"incluir"),", ",Object(o.b)("strong",{parentName:"p"},"remover")," ou ",Object(o.b)("strong",{parentName:"p"},"reordenar")," colunas personalizadas na tabela de listagem do admin do WordPress ao registrar um Post Type. Isso \xe9 bem \xfatil quando voc\xea tem ",Object(o.b)("em",{parentName:"p"},"custom fields")," ou ",Object(o.b)("em",{parentName:"p"},"taxonomias personalizadas")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Para adicionar colunas personalizadas de ",Object(o.b)("strong",{parentName:"p"},"taxonomias"),", ver registro em ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"taxonomies"}),"Taxonomia"),"."))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"add")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tabelas para adicionar"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"order")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ordena\xe7\xe3o das tabelas"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"hide")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"array")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Remover tabelas"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(o.b)("h3",{id:"add"},"add"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obrigat\xf3rio"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"label")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Label da tabela"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"populate")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"callable")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fun\xe7\xe3o que recebe 2 valores ",Object(o.b)("inlineCode",{parentName:"td"},"fn($column, $post_id)")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2714")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"sort")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Meta Key para ordena\xe7\xe3o"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"numeric")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"bool")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ordenar via numeral ou string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2718")))),Object(o.b)("h3",{id:"order"},"order"),Object(o.b)("p",null,"Um array com a ",Object(o.b)("inlineCode",{parentName:"p"},"chave ou nome da coluna"),". As colunas na tabela ir\xe3o aparecer na ordem de inclus\xe3o do array."),Object(o.b)("h3",{id:"hide"},"hide"),Object(o.b)("p",null,"Um array contendo a ",Object(o.b)("inlineCode",{parentName:"p"},"chave ou nome da coluna"),". As colunas adicionadas aqui ser\xe3o removidas da tabela de listagem do admin."),Object(o.b)("h3",{id:"exemplo-de-uso"},"Exemplo de Uso"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"\n  /*\n  |--------------------------------------------------------------------------\n  | Products Post Type with Custom Columns\n  |--------------------------------------------------------------------------\n  */\n  [\n    'names'   => [\n      'name'   => 'Product',   // required\n      'slug'   => 'produtct' , // optional\n    ],\n    'columns' => [\n      'add'   => [\n        'column-1' => [\n          'label'    => 'Column 1',           // column label\n          'sort'     => 'meta_field_1',       // sort by meta_field_1\n          'numeric'  => false,                // is alphabetically\n          'populate' => 'get_meta_field_1',   // get content from get_meta_field_1() function\n        ],\n        'column-2' => [\n          'label'    => 'Column 2',           // column label\n          'sort'     => 'meta_field_2',       // sort by meta_field_1\n          'numeric'  => true,                 // is numeric\n          'populate' => 'get_meta_field_2',   // get content from get_meta_field_2() function\n        ],\n      ],\n      'order' => [\n        'my-custom-tax', // first column\n        'column-1',      // second column\n        'title',         // third column\n      ],\n      'hide'  => [ 'author' ], // hide author column\n    ],\n  ],\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// Populate Column 1 with ACF\nfunction get_meta_field_1($column, $post_id) {\n  return get_field('meta_field_1', $post_id);\n}\n\n// Populate Column 2 with ACF\nfunction get_meta_field_2($column, $post_id) {\n  return get_field('meta_field_2', $post_id);\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"instanciando-um-post-type"},"Instanciando um Post Type"),Object(o.b)("p",null,"Al\xe9m de poder criar um Post Type utilizando o registro no arquivo ",Object(o.b)("inlineCode",{parentName:"p"},"./core/config/cpts.php"),", voc\xea pode instanciar um objeto e criar manualmente seu CPT usando a classe ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"class-cpt"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Onyx\\Cpt"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"somente o par\xe2metro ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"name(s)"))," \xe9 obrigat\xf3rio, podentro ser uma ",Object(o.b)("em",{parentName:"p"},"string")," ou um ",Object(o.b)("em",{parentName:"p"},"array"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"  $cpt = new \\Onyx\\Cpt();\n\n  // assign post type names\n  $cpt->names([\n    'name'   => 'Product',\n    'plural' => 'Products',\n    'slug'   => 'product'\n  ]);\n\n  // assign post type arguments\n  $cpt->options([\n    'show_in_rest'  => true,\n    'menu_position' => 10,\n    'supports'      => ['title', 'editor', 'thumbnail']\n  ]);\n\n  // set post type icon\n  $cpt->icon('dashicons-admin-page');\n\n  // add search taxonomy filters\n  $cpt->filters( ['my-custom-taxonomy', 'my-other-taxonomy'] );\n\n  // METHOD 1: Add Columns\n  $cpt->columns()->register_columns([\n    'column-1' => [\n      'label'    => 'Column 1',           // column label\n      'sort'     => 'meta_field_1',       // sort by meta_field_1\n      'numeric'  => false,                // is alphabetically\n      'populate' => 'get_meta_field_1',   // get content from get_meta_field_1() function\n    ]\n  ]);\n    \n  // METHOD 2: Add Columns\n  $cpt->columns()->add('Column 2');\n  $cpt->columns()->populate('Column 2', 'get_meta_field_2');\n  $cpt->columns()->set_sortable( [\n    'Column 2'  => [ 'meta_field_2', true ],\n  ]);\n    \n  // hide columns\n  $cpt->columns()->hide( [ 'author' ] );\n    \n  // change columns order\n  $cpt->columns()->order([\n    'Date',\n    'Column 1',\n    'Column 2',\n    'Title'\n  ]);\n\n  $cpt->register();\n")))}p.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,O=m["".concat(b,".").concat(d)]||m[d]||s[d]||o;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<o;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);