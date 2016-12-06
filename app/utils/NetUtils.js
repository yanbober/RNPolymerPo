/**
 * React Native JS Http(s) POST/GET Json/unformat工具类
 * 核心知识点：JS fetch、Promise机制
 */
'use strict';

import React, { Component } from 'react';

export default class NetUitl extends Component {
  static get(url, parseJson=true) {
    return this.request(url, 'get', undefined, parseJson);
  }

  static post(url, body, parseJson=true) {
    return this.request(url, 'post', body, parseJson);
  }

  static request(url, method, body, parseJson) {
    console.log("NetUitl ["+method+"] url = "+url+", body = "+body);
    let isOk;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        body: body
      })
      .then((response) => {
        isOk = !!response.ok;
        console.log("NetUitl ["+method+"] url: "+url+", response="+response);
        if (parseJson) {
          return response.json();
        } 
        return response.text();
      })
      .then((responseData) => {
        if (isOk) {
          console.log("NetUitl ["+method+"] url: "+url+", success="+responseData);
          resolve(responseData);
        } else {
          console.log("NetUitl ["+method+"] url: "+url+", not ok="+responseData);
          reject(responseData);
        }
      })
      .catch((error) => {
        console.log("NetUitl ["+method+"] url: "+url+", error="+error);
        reject(error);
      });
    });
  }
}