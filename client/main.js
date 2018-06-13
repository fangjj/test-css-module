import {render } from 'react-dom';
import React from 'react';

import { Meteor } from 'meteor/meteor';
import './antd.less';
import styles from './main.less';
import {Button, } from 'antd-mobile';

console.log(styles);

const Hello = () => {
	return (
		<div>
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

