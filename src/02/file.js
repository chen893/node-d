const fs = require('fs')
fs.readFile('./a.txt', 'utf-8', function (err, data) {
  if (!err) {
    const newData = data + ' meituan'
    fs.writeFile('./a.txt', newData, function (err) {
      if (!err) {
        console.log('追加成功')
      }
    })
  }
})
