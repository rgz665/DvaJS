import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from './../components/Example'

const IndexPage = ({dispatch, example}) => {
  function change(){
    dispatch({
       //触发路径的方法 
       type:"example/save",
       payload:'更改之后的State'
    })
  }
  return (
    <div className={styles.normal}>
      <Example></Example>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>{example.name} <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <div className={styles.change} onClick={change}>
        更改State
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({example}) => ({
    example,
}))(IndexPage);
