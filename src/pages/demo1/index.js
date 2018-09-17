/**
 * Demo页
 */
import template from './template.html';
import style from './style.styl';
import './style2.css';
import './style3.scss';
import './style4.less';
import './style5.sass';
import moment from 'moment';
import {
  c2s
} from '@/deps/utils';

export default {
  template,
  data() {
    console.log(5);
    return {
      classNames: {
        [style['cpt']]: true
      }
    };
  },
  mounted() {
    c2s({
      url: 'test',
      onSuccess(data) {
        console.log('success', data);
      }
    });
    console.log(moment());
  }
};
