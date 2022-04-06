/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const yml = require('yaml')

const ymlFile = path.join(__dirname, '../src/data/words.yml')
const jsonFile = path.join(__dirname, '../src/data/words.json')

console.log(`Reading YML from: ${ymlFile}`)
const file = fs.readFileSync(ymlFile, 'utf8')
console.log(`Writing JSON to ${jsonFile}`)
const parsed = yml.parse(file)
// console.log(yml.parse(file))
fs.writeFileSync(jsonFile, JSON.stringify(parsed))
console.log('Done!!!')
