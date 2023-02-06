import { strict as assert } from "assert"
import { EnvironmentGetter } from "contentful-typescript-codegen"
import { loadEnvConfig } from '@next/env'
import { createClient } from "contentful-management"

// Get current directory and env vars
const projectDir = process.cwd()
loadEnvConfig(projectDir)

// Confirm env vars
const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

// Get Contentful environment
const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
  })

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
}

module.exports = getContentfulEnvironment