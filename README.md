# Custom Vuetify

## Intro

This project can be used as a sample or blueprint to create a custom NPM component library on top of [Vuetify](https://github.com/vuetifyjs/vuetify) with integration of [Storybook](https://github.com/storybookjs/storybook).

We like Vuetify and Material Design – but sometimes projects need to have a bit more of their own style. By creating our own custom [Vue](https://github.com/vuejs/vue) component library, we can easily reuse these customizations in other projects. With this technique, you don't have to write every component from scratch. Instead, you can make use of an already existing library with some adjustments. In this case, we're working with [Vuetify](https://github.com/vuetifyjs/vuetify) - but the blueprint should work for other frameworks as well.

It's definitely cool to have your own component library, but you also want to show your components isolated from the whole 
application and maybe play around with the props and stuff. That's what [Storybook](https://github.com/storybookjs/storybook) is great for.

## Main parts

| Module                                                        | Version    |
| ---                                                           | ---        |
| [Vue](https://github.com/vuejs/vue)                           | 2.6.11     |
| [@vue/cli](https://github.com/vuejs/vue-cli)                  | 4.4.4      |
| [vuetify](https://github.com/vuetifyjs/vuetify)               | 2.2.11     |
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
`npm run build-storybook` - build your static storybook (for deploying on a remote machine)

### Integration

Okay, so you built your library and want to use it in another project? To get started, you will need to either `npm publish` or `npm link` your library locally.

Then you can create a new Vue project via Vue-CLI with everything you need (Since we rely on the above mentioned configuration also for our final app, we simply use that in addition to vuex and vue-router).

We still need to `vue add vuetify` to our new app as well as installing/linking our newly packaged library. Then create a new .ts file within the `plugins/` folder with following content:
```ts
import Vue from "vue";
import Components from '@leanera/components';
import '@leanera/components/dist/components.css'

Vue.use(Components);

```

Make sure to adjust the package name and import your .ts in your `main.ts`


That's it, now you can use your defined components in your new project!

 

## Problems we ran into along the way

### Build that *$!&%$ storybook

Due to the setup with Typescript and Sass, the generation of Storybook is a bit more complex than [guide](https://storybook.js.org/docs/guides/guide-vue/) describes, so we needed to configure Webpack to handle our TypeScript and Sass (see `.storybook/main.js`).
We need to not only add the `ts-loader` to handle our Typescript, but also style-loaders for our Sass/SCSS.

### Where is my Vuetify!?

So, we got Storybook to work, but all Vuetify styles are missing...  

To handle that, we need to add some imports to `.storybook/preview.js`.

First of all, the Vuetify plugin which we add as a decorator to all our stories. It's basically the same as
adding Vuetify to your application and the Vue instance in your `main.[t|j]s`.  
But somehow, that's not enough, so we also need to `import Vuetify from 'vuetify'` and add it via `Vue.use(Vuetify)`.  
This is a bit odd, since the import from `vuetify/lib` as in the Vuetify plugin doesn't work.

Finally, add the `<v-app><v-main><story></story></v-main></v-app>` template to the decorator to wrap all your stories.
