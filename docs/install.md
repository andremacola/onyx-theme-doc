---
id: install
title: Installation
sidebar_label: Installation
---

To install [Onyx Theme](https://github.com/andremacola/onyx-theme) download the desired version in the [releases](https://github.com/andremacola/onyx-theme/releases) Github area or directly from [main branch.](Https://github.com/andremacola/onyx-theme/zipball/master)

---

## Dependencies

Verify that all dependencies have been installed before proceeding:

> - [WordPress](https://wordpress.org/) >= 4.7
> - [PHP](https://www.php.net/manual/en/install.php) >= 7.2
> - [Composer](https://getcomposer.org/download/)
> - [Node JS](https://nodejs.org/)
> - [Yarn](https://classic.yarnpkg.com/en/docs/install) ^1.22.4

---

## Step by step

***1 |*** Extract the theme files in your WordPress `themes` folder  
***2 |*** In terminal, execute the following commands:  

```bash
# @ themes/onyx-theme/
composer install
yarn install
```
***3 |*** Rename the file `.env.example` to` .env` and update the development parameters if necessary  
***4 |*** Activate the theme in your WordPress dashboard  
***5 |*** Start the development by running the command below:  

```bash
yarn serve
```
