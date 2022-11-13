/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const yml = require('yaml')
const glob = require('glob')

const ymlFileGlob = path.join(__dirname, '../src/data/flip-cards/*.yml')

glob(ymlFileGlob, (er, files) => {
  files.forEach((f) => {
    console.log(`Converting ${f}`)
    fs.writeFileSync(
      f.replace('.yml', '.json'),
      JSON.stringify(yml.parse(fs.readFileSync(f, 'utf8')))
    )
  })
})
