import { strict as assert } from "assert"
import { ContentfulClientApi, createClient, Entry, EntryCollection } from "contentful"
import { IStatusFields } from "../src/@types/contentful"
import * as contentful from 'contentful'

/**
 * Factory function to create a Contentful API Client
 * @returns {ContentfulClientApi}
 */
const createContentfulClient = (): ContentfulClientApi => {

    const { CONTENTFUL_DELIVERY_API_ACESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

    assert(CONTENTFUL_DELIVERY_API_ACESS_TOKEN)
    assert(CONTENTFUL_SPACE_ID)
    assert(CONTENTFUL_ENVIRONMENT)

    return createClient({
        space: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_DELIVERY_API_ACESS_TOKEN,
        environment: CONTENTFUL_ENVIRONMENT,
    })
}

/**
 * Service to access Contentful API
 */
export default class ContentfulService {

    client: ContentfulClientApi

    constructor() {
        this.client = createContentfulClient()
    }

    // Get all entries of a type
    getEntriesByType = async <T>(type: string): Promise<EntryCollection<T> | null> => {
        try {
            return (
                await this.client.getEntries<T>({
                    content_type: type,
                    resolveLinks: true
                })
            )
        } catch (err) {
            console.log('Error getting entries by type: ', type)
            console.log('Error: ', err)
    
            return null
        }
    }

    // Get status entry by URL key field value
    getStatusEntryByUrlKey = async (passcode: string): Promise<contentful.Entry<IStatusFields> | null> => {
        try {
            const response = await this.client.getEntries<IStatusFields>({
                content_type: 'status',
                resolveLinks: true,
                'fields.urlKey': passcode
            })
            
            return response.items[0]

        } catch (err) {
            console.log('Error: ', err)
    
            return null
        }
    }

    // Get single entry by ID
    getEntryById = async <T>(id: string): Promise<Entry<T> | null> => {
        try {
          return await this.client.getEntry<T>(id, {
            limit: 1
          })
        } catch (err) {
          console.log('Error getting entry by ID: ', id)
          console.log('Error: ', err)
    
          return null
        }
      }

}

export const contentfulApi = new ContentfulService()