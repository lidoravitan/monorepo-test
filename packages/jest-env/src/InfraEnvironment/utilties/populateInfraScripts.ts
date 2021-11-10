import fs from 'fs'
import path from 'path'

export const populateInfraScripts = () => {
  const infraPath = path.resolve(
    __dirname,
    '../../node_modules/webinfra-frontend/build/infra'
  )

  const vendors = fs.readFileSync(infraPath + '/vendors.js', 'utf-8')
  const app = fs.readFileSync(infraPath + '/app.js', 'utf-8')

  return [vendors, app]
}
