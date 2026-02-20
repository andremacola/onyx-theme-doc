---
id: app
title: APP Configurations
sidebar_label: App
---

This file contains basic settings for the theme's operation and setup.

 - `version`: Theme's version. Generally used for JS / CSS parameters
 - `static`: Load static files from a domain/subdomain *(static.domain.tld/custom-path)*
 - `home`: is_home() *deprecated*
 - `single`: is_single() *deprecated*
 - `theme`: Returns theme's directory
 - `dir_uri`: Theme directory URL
 - `dir`: Absolute path to theme directory
 - `desc`: Site description
 - `name`: Site name
 - `url`: Home URL
 - `rest`: WordPress REST API prefix. Default: *api* (previously: wp-json)
 - `user`: Logged user emails
 - `devs`: Emails array from project developers. Used for debugging. See more at *[\Onyx\O::is_dev()](helpers#ois_dev)*
 - `uploads`: Controls the size limit for uploading within the admin and disables file types.
    - `max_file_size`: Default: 5000 (5MB)
    - `unset_types`: Disable file types for upload
