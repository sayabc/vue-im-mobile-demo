'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'pre'

require('./build')
