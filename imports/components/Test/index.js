import React from 'react';
import styles from './index.less';
console.log(styles);

export default () => <div className={styles['font-20']}> font-20 <span className={styles['font-30']}>font-30</span> </div>