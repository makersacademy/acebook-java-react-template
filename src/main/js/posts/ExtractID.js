import React from 'react'

export default class ExtractID {
  static extractID(href) {
    const regex = /(?<=posts\/).+/;
    let str = href;
    let endOfPath = str.search(regex);
    let id = str.substr(endOfPath);
    return id
  }
}

 //self.ExtractId = (href) => {
 //   const regex = /(?<=posts\/).+/;
 //   let str = href;
 //   let endOfPath = str.search(regex);
 //   let id = str.substr(endOfPath);
 //   return id
// }
// export default ExtractId;