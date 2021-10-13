const fs = require('fs')
const path = require('path')

exports.populateInfraScripts = () => {
  const infraPath = path.resolve(
    __dirname,
    '../../node_modules/webinfra-frontend/build/infra'
  )

  const vendors = fs.readFileSync(infraPath + '/vendors.js', 'utf-8')
  const app = fs.readFileSync(infraPath + '/app.js', 'utf-8')

  return [vendors, app]
}
