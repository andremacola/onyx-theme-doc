---
id: gulp
title: Configuring Gulp and LiveReload
sidebar_label: Setup
---

[Onyx Theme](https://github.com/andremacola/onyx-theme) uses [Gulp](https://gulpjs.com/) to automate javascripts and scss. We use [Live Reload](https://github.com/livereload/livereload-js) to synchronize the refresh with the browser. In our tests and configurations, we had higher performance / response and less latency compared to *Browser Sync*

## Gulp Commands

|Commands         | Functionalities                            |
|------------------|--------------------------------------------|
| *yarn serve*       | Listen and process the files with each change
| *yarn serve:prod*  | The same as the command `serves` but using the production environment
| *yarn build*       | Generate the build for production

***NOTE***: A `.local` domain is required to run Live Reload.

---

## Live Reload

<div class='embed-container'><iframe src='https://www.youtube.com/embed/LaJSyYPDyBQ?rel=0' frameborder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Configure the variables in the `.env` file located at the root of the theme folder.

:::info
For Live Reload to work, the development domain ***must be `.local`***
:::

Once configured, if you have the project open in the browser, refresh the page to load the Live Reload for the first time and test.

## Static Files

All source files for both javascript and sass are located in the `src /` folder. The compiled files will be in their respective folders located in `assets /`

In this version ***Onyx Theme*** does not do image processing.
