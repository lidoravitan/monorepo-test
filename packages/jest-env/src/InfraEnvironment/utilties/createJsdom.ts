import { JSDOM, VirtualConsole } from 'jsdom'

const createVirtualConsole = ({ omitJSDOMErrors = true } = {}) => {
  const virtualConsole = new VirtualConsole()
  virtualConsole.sendTo(console, { omitJSDOMErrors })
  return virtualConsole
}

export const createJSDOM = () => {
  return new JSDOM('<!doctype html><html><body></body></html>', {
    runScripts: 'dangerously',
    url: 'http://localhost',
    virtualConsole: createVirtualConsole(),
  })
}
