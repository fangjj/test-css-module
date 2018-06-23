import {render } from 'react-dom';
import React from 'react';

import { Meteor } from 'meteor/meteor';
import './global.less';
import styles from './main.less';
import {Button, } from 'antd-mobile';
import Test from '../imports/components/Test/index.js';
console.log(styles);

const Hello = () => {
	return (
		<div>
			<Test />
			<Button type="primary"> antd-mobile </Button>
			<div className={styles['font-50']}>font-50</div>
			<div className="g-font-50">g-font-50</div>
			<div className={styles['font-40']}>font-40</div>
		</div>
	)
};

Meteor.startup(() => {
  // code to run on client at startup
  render(<Hello />, document.getElementById('root'));
});

