#!/usr/bin/env node

console.log(process.argv)
if (process[2] === '--help') {
  console.log('获取到了命令参数')
}
console.log('myCli')
