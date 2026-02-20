---
id: mail
title: Settings for wp_mail();
sidebar_label: Email
---

Never send emails without first configuring an SMTP server. The file `./core/config/mail.php` let you register the parameters that the WordPress `wp_mail()` function will use. There is no need to use third party plugins except in cases of authorization via API.

PS: You need to activate the hook `[ 'phpmailer_init', 'onyx_smtp_config' ]` inside [Hooks](hooks).

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
