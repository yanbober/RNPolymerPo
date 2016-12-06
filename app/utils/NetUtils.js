/*
 * MIT License
 *
 * Copyright (c) 2016 yanbo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

import React, { Component } from 'react';
/**
 * React Native JS Http(s) POST/GET Json/unformat工具类
 * 核心知识点：JS fetch、Promise机制
 */
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