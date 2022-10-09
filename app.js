'use strict';
module.exports = app => {
  app.beforeStart(async () => {
    // 示例：启动的时候去读取 https://registry.npmjs.com/egg/latest 的版本信息
    const result = await app.curl('http://quotes.money.163.com/service/chddata.html?code=0600020&start=20170921&end=20220916&fields=TCLOSE;HIGH;LOW;TOPEN;LCLOSE;PCHG;TURNOVER;VOTURNOVER;TCAP;MCAP', {
    //   dataType: 'json',
    });
    let json22 =(result.data.toString());
    const  fs=require('fs');
    fs.writeFile('./aa.txt',json22,'utf-8',(err,data)=>{
      if(err) throw err
      console.log("导入成功");
    })
    
    // app.logger.info('egg latest version: %s', json22);
    console.log("11111111111111");
    // console.log( json22);
    console.log("2222222222222");
  });
};