const index = require('./index') 
const config = require('./utils/config')
const logger = require('./utils/logger')

index.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})