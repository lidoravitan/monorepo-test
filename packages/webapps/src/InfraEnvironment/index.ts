const NodeEnvironment = require('jest-environment-node')

const { loadExtenalScripts, createJSDOM, populateInfraScripts } = require('./utilties')
const { mockCanvas, mockInfraConfig, mockLocalStorage } = require('./mocks')

class InfraEnvironment extends NodeEnvironment {
  constructor (config, context) {
    super(config, context)
    this.testPath = context.testPath
    this.docblockPragmas = context.docblockPragmas
    this.window = {
      close: () => {
        throw Error('Please make sure jsdom created properly.')
      }
    }
  }

  async setup () {
    await super.setup()

    const { window } = createJSDOM()

    mockLocalStorage(window)
    mockCanvas(window)
    mockInfraConfig(window)

    loadExtenalScripts(window, populateInfraScripts())

    this.global.Infra = window.Infra
    this.global.window = window
    this.global.document = window.document
    this.global.global.navigator = {
      userAgent: 'node.js'
    }

    this.window = window
  }

  async teardown () {
    await super.teardown()

    // JSDOM Util to terminate all running timers (and also remove any event listeners on the window and document).
    this.window.close()

    // remove refrences to make sure GC removes those allocations
    this.global.Infra = undefined
    this.global.window = undefined
    this.global.document = undefined
    this.global.global.navigator = undefined
    this.window = undefined
  }

  runScript (script) {
    return super.runScript(script)
  }

  handleTestEvent (event, state) {}
}

exports.InfraEnvironment = InfraEnvironment
