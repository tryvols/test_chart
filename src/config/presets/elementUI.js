import Vue from 'vue';
import {
  Input,
  DatePicker,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

export default function () {
  locale.use(lang);
  Vue.component(Input.name, Input);
  Vue.component(DatePicker.name, DatePicker);
}
