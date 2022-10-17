'use strict';
const { readFile } = require('fs').promises;
module.exports = app => {
  app.beforeStart(async () => {
    // 示例：启动的时候去读取 https://registry.npmjs.com/egg/latest 的版本信息
    // let shCode =[600020,600021,600024];
    const shCode = await readFile('json/shcode.json');
    const json77 = JSON.parse(shCode).code;
    console.log(shCode.toString());
    for(var i=0;i<json77.length;i++){
      console.log(json77[i]);
    
    const result = await app.curl(`http://quotes.money.163.com/service/chddata.html?code=0${json77[i]}&start=20200921&end=20220916&fields=TCLOSE;HIGH;LOW;TOPEN;LCLOSE;PCHG;TURNOVER;VOTURNOVER;TCAP;MCAP`, {
    //   dataType: 'json',
    });
    let json22 =(result.data.toString());
    const  fs=require('fs');
    fs.writeFile(`./${json77[i]}.txt`,json22,'utf-8',(err,data)=>{
      if(err) throw err ;console.log(err);
      console.log("导入成功");
    });
  }
  
  });
};