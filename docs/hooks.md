---
id: hooks
title: Configuração de Actions e Filters (Hooks)
sidebar_label: Hooks
---

Todos os Hooks (actions e filters) do WordPress são registrados neste arquivo de configuração. **Você pode utilizar a forma padrão do WordPress** em seus arquivos porém para manter um padrão de desenvolvimento, recomendamos registrar todos os *Hooks* aqui.

:::warning
Por favor, **não adicione** funções neste arquivo com exceção de [closures](#closures). Coloque suas funções em algum arquivo na pasta `./core/includes` e faça o require em `functions.php`.
:::

Este arquivo retorna um `Array` que é carregado no setup do tema com os seguinte parâmetros:

- `filters`:
  - `add`: alias para a função [add_filter](https://developer.wordpress.org/reference/functions/add_filter/) do WordPress
  - `remove`: alias para a função [remove_filter](https://developer.wordpress.org/reference/functions/remove_filter/) do WordPress
  - `apply`
- `actions`
  - `add`: alias para a função [add_action](https://developer.wordpress.org/reference/functions/add_action/) do WordPress
  - `remove`: alias para a função [remove_action](https://developer.wordpress.org/reference/functions/remove_action/) do WordPress

---

## Parâmetros

O *Array* dos hooks carregam em ordem adicionada e recebem até 4 (quatro) parâmetros:

| Param              | Tipo       | Descrição                            | Obrigatório |
|--------------------|------------|--------------------------------------|-------------|
| `$tag`             | *string*   | tag do Filtro/Action                 | ✔           |
| `$function_to_add` | *callable* | Função para chamar                   | ✔           |
| `$priority`        | *int*      | Prioridade (padrão: 10)              | ✘           |
| `$accepted_args`   | *int*      | Quantidade de argumentos (padrão: 1) | ✘           |

## Exemplo de Uso

```php
'filters' => [
  ...
  'remove' => [
    ...
    ['the_content', 'my_custom_filter_function', 10, 2],
  ]
],

'actions' => [
  ...
  'add' => [
    ...
    ['wp_head', 'my_custom_action_function', 10, 2],
  ]
]
```

---

## Closures

Você também pode adicionar filtros ou actions utilizando uma função anônima.

```php
'filters' => [
  ...
  'remove' => [
    ...
    ['the_content', function($param1) {
      return $param1.$param2;
    }, 10],
  ]
],

'actions' => [
  ...
  'add' => [
    ...
    ['wp_head', function($param1, $param2) {
      echo "$Param1 and $param2";
    }, 10, 2],
  ]
]
```
