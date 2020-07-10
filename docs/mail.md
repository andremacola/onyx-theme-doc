---
id: mail
title: Configurações para wp_mail();
sidebar_label: Email
---

Nunca envie emails sem antes configurar um servidor SMTP. No arquivo `./core/config/mail.php` você registra os parâmetros que a função `wp_mail()` do WordPress irá utilizar. Não há necessidade usar plugins de terceiros salvo em casos de autorização via API.

```php
return [
  'from'   => 'email@domain.tld',
  'name'   => 'Client Name',
  'host'   => 'smtp.gmail.com',
  'port'   => 465,
  'secure' => 'ssl',
  'auth'   => true,
  'user'   => 'username',
  'pass'   => 'password',
];
```
