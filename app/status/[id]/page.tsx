import React from 'react'
import { IStatusFields } from 'src/@types/contentful'
import { boolToAffirmOrNeg } from 'utils/textUtils'
import { contentfulApi } from '../../../services/contentful'
import MoodItem from 'components/MoodItem'
import StatusItem from 'components/StatusItem'
import { Entry } from 'contentful'
import moment from 'moment-timezone'

type PageProps = {
    params: {
        id: string
    }
}

/**
 * Data fetch for Contentful status
 * @param urlKey - URL key for status
 * @returns - Status fields
 */
const refreshData = async (urlKey: string): Promise<Entry<IStatusFields> | null> => {
    const data = await contentfulApi.getStatusEntryByUrlKey(urlKey)
    return data
}

async function Status(props: PageProps) {

    const status = await refreshData(props.params.id)

    if (!status) return null

    const {callAvailability, currentMood, endOfWorkday, headphonesOn, inMeeting, lightColor, note} = status.fields

    return (
        <main>
                <div className='px-10 mt-2 text-sm text-center w-screen'>
                    Last Updated: {moment(status.sys.updatedAt).tz('America/New_York').format('MMMM Do YYYY, h:mm A')}
                </div>
            <div className='grid p-8 place-content-center text-xl w-full'>

                <div className='px-10 w-screen'>
                    <MoodItem color={lightColor} value={currentMood.toString()} />
                    <StatusItem label='Call' value={callAvailability} />
                    <StatusItem label='In Meeting' value={boolToAffirmOrNeg(inMeeting)} />
                    <StatusItem label='Headphones' value={boolToAffirmOrNeg(headphonesOn)} />
                    <StatusItem label='End of Workday' value={endOfWorkday || ''} />

                    {!!note && 
                        (
                            <div className='mt-8'>
                                <div className='text-blue-600'>
                                    <strong>
                                        Note:
                                    </strong>  
                                </div>
                                <div>{note}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default Status