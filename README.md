# Custom Vuetify


## Intro

This project can be used as a sample or blueprint to create a custom component library build on top 
of [Vuetify](https://github.com/vuetifyjs/vuetify) with integration of [Storybook](https://github.com/storybookjs/storybook).

Sometimes, it makes sense to create an own custom [Vue](https://github.com/vuejs/vue) component library for your UI. Maybe you want simply want to reuse your  
work in another project without copy & pasting all your stuff. Or multiple parties need to write frontends based on the same
designs.
You, the designer and most likely your client, don't want to check and approve every single implementation of the same small 
piece (like button, headlines or input fields), but to have a single source of truth: your component library.

Maybe you don't want to write every component from scratch, but want to make use of an already existing library with some adjustements.
In this case, we use [Vuetify](https://github.com/vuetifyjs/vuetify).

It's definitely cool to have your own component library, but you also want to show your components isolated from the whole 
application and maybe play around with the props and stuff. For that case, we use [Storybook](https://github.com/storybookjs/storybook).

## Main parts

| Module                                                        | Version    |
| ---                                                           | ---        |
| [Vue](https://github.com/vuejs/vue)                           | 2.6.11     |
| [@vue/cli](https://github.com/vuejs/vue-cli)                  | 4.4.4      |
| [@storybook/vue](https://github.com/storybookjs/storybook)    | 5.3.19     |

## Vue Configuration

For our component library, we use Vue with following features/configurations:
* Babel
* Typescript
* CSS Pre-processors (Sass/SCSS)
* Linter (ESLint + Prettier)
* class-style component syntax

## Build & Use

### Commands 

`npm run build` - build your component library  
`npm run storybook` - run storybook locally  
`npm run build-storybook` - build your static storybook, e.g. for deploying on a remote machine

### Integration

Okay, so you built your library and want to use it in another project?
Either publish or link your library locally.

Create a new Vue project via Vue-CLI with everything you need.  
Since we rely on the above mentioned configuration also for our final app, we simply use that in addition to vuex and vue-router.

We also need to `vue add vuetify` to our new app.  
Now install/link your package library and create a new .ts file within the plugins folder with following content:
```ts
import Vue from "vue";
import Components from '@leanera/components';
import '@leanera/components/dist/components.css'

Vue.use(Components);

```

Make sure to adjust the package name and import your .ts in your `main.ts`


That's it! Now you can use your defined components in your new project!

 

## Problems we ran into

### Build that *$!&%$ storybook

Due to the setup with Typescript and Sass, the generation of Storybook is a bit more complex as the [guide](https://storybook.js.org/docs/guides/guide-vue/) describes,
so we needed to configure Webpack to handle our TypeScript and Sass (see `.storybook/main.js`).
We need to not only add the `ts-loader` to handle our Typescript, but also style-loaders for our Sass/SCSS.

### Where is my Vuetify!?

So, we got Storybook to work, but all Vuetify styles are missing...  

To handle that, we need to add some imports to `.storybook/preview.js`.


First of all, the Vuetify plugin which we add as a decorator to all our stories. It's basically the same as
adding Vuetify to your application and the Vue instance in your `main.[t|j]s`.  
But somehow, that's not enough, we also need to `import Vuetify from 'vuetify'` and add it via `Vue.use(Vuetify)`.  
This is a bit odd, since the import from `vuetify/lib` as in the Vuetify plugin doesn't work.

Finally, add the `<v-app><v-main><story></story></v-main></v-app>` template to the decorator to wrap all your stories.
