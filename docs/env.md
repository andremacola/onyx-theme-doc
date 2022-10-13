---
id: environment
title: Configurações de ambiente APP
sidebar_label: Ambiente
---

Este arquivo contém configurações básicas para o funcionamento e setup do tema.

 - `version`: Versão do seu tema. Geralmente utilizada para parametros de JS/CSS
 - `static`: Carregar arquivos estáticos a partir de um domínio *(static.domain.tld/custom-path)*
 - `theme`: Retorna o nome do diretório do tema
 - `dir_uri`: URL do diretório do tema
 - `dir`: Caminho absoluto do diretório do tema
 - `desc`: Descrição do site
 - `name`: Nome do site
 - `url`: Url da Home do site
 - `rest`: Prefixo da REST API do WordPress. Padrão *api* (anteriormente: wp-json)
 - `user`: Retorna o email do usuário logado
 - `devs`: Array com emails de desenvolvedores do projeto. Usado para debug. Veja mais em *[\Onyx\O::is_dev()](helpers#ois_dev)*
 - `timber`: Configurações gerais para o Timber
    - `cache_dir`: Diretórios dos arquivos de cache do Twig
 - `uploads`: Controla o limite do tamanho para upload no admin e desabilita tipos de arquivos.
    - `max_file_size`: Padrão 5000 (5MB)
    - `unset_types`: Desabilita tipos para upload

:::info
Por padrão o Onyx Theme desabilita para upload as extensões: **mp4|m4v, mov|qt, wmv, avi, mpeg|mpg|mpe, 3gp|3gpp, 3g2|3gp2, asf|asx, wmx, wm, divx, flv, ogv, webm, mkv**
:::
