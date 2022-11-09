const fs = require('fs')
fs.writeFile('./a.txt', 'hello world', function (err) {
  console.log(err)
})
