import React from 'react'
import { IStatusFields } from 'src/@types/contentful'
import { boolToAffirmOrNeg } from 'utils/textUtils'
import { contentfulApi } from '../../../services/contentful'
import MoodItem from 'components/MoodItem'
import StatusItem from 'components/StatusItem'

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
const refreshData = async (urlKey: string): Promise<IStatusFields> => {
    const data = await contentfulApi.getStatusEntryByUrlKey(urlKey)
    return data?.fields as IStatusFields
}

async function Status(props: PageProps) {

    const status = await refreshData(props.params.id)

    return (
        <main>
            <div className='grid p-8 place-content-center text-xl w-full'>
                <div className='px-10 w-screen'>
                    <MoodItem color={status.lightColor} value={status.currentMood.toString()} />
                    <StatusItem label='Call' value={status.callAvailability} />
                    <StatusItem label='In Meeting' value={boolToAffirmOrNeg(status.inMeeting)} />
                    <StatusItem label='Headphones' value={boolToAffirmOrNeg(status.headphonesOn)} />
                    <StatusItem label='End of Workday' value={status.endOfWorkday || ''} />

                    {!!status.note && 
                        (
                            <div className='mt-8'>
                                <div className='text-blue-600'>
                                    <strong>
                                        Note:
                                    </strong>  
                                </div>
                                <div>{status.note}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default Status