import { addDecorator } from '@storybook/vue';
import { addParameters } from '@storybook/client-api';
import { withKnobs } from '@storybook/addon-knobs';
import vuetify from '@/plugins/vuetify';
// because of some strange, unknown reason, we have to import Vuetify additionally from vuetify and add it via Vue.use (see below)
import Vuetify from 'vuetify';
// we need this to have vuetify styles in storybooks static build
import 'vuetify/dist/vuetify.css'
// import our custom SCSS
import '@/sass/lea.scss'
import Vue from 'vue';

const newViewports = {
  viewports: {
    mobile: {
      name: 'iPhone 6/7/8',
      styles: {
        width: '375px',
        height: '667px'
      }
    },
    tablet: {
      name: 'iPad',
      styles: {
        width: '768px',
        height: '1024px'
      }
    }
  }
};

addParameters({
  viewport: newViewports
});

Vue.use(Vuetify);

addDecorator(() => ({
  vuetify,
  template: '<v-app><v-main><story></story></v-main></v-app>'
}));
addDecorator(withKnobs);
