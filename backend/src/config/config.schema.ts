import { Schema } from 'convict'

export interface ConfigSchema {
  port: number
  environment: 'development' | 'staging' | 'production'
  session: { name: string; secret: string; cookie: { maxAge: number } }
}

export const schema: Schema<ConfigSchema> = {
  port: {
    doc: 'The port that the service listens on',
    env: 'PORT',
    format: 'int',
    default: 8080,
  },
  environment: {
    doc: 'The environment that Node.js is running in',
    env: 'NODE_ENV',
    format: ['development', 'staging', 'production'],
    default: 'development',
  },
  session: {
    name: {
      doc: 'Name of session ID cookie to set in response',
      env: 'SESSION_NAME',
      default: 'ts-template',
      format: String,
    },
    secret: {
      doc: 'A secret string used to generate sessions for users',
      env: 'SESSION_SECRET',
      default: 'toomanysecrets',
      format: String,
    },
    cookie: {
      maxAge: {
        doc: 'The maximum age for a cookie, expressed in ms',
        env: 'COOKIE_MAX_AGE',
        format: 'int',
        default: 24 * 60 * 60 * 1000, // 24 hours
      },
    },
  },
}
