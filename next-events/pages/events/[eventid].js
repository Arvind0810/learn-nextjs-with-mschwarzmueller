import { getEventById, getAllEvents } from "../../helpers/api-util"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import Head from "next/head"

function EventDetailsPage(props){
    const event = props.event
    if(!event){
        return <p>No event found</p>
    }
    return <>
        <Head >
            <title>{event.title}</title>
            <meta 
            name="description"
            content={event.description}
            />
        </Head>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent >
            <p>{event.description}</p>
        </EventContent>
    </>
}

export async function getStaticProps(context){
    const eventId = context.params.eventid
    const event = await getEventById(eventId)
    return {
        props: {
            event: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths(){
    const events = await getAllEvents()

    const paths = events.map(event => ({params: {eventid: event.id}}))

    return {
        paths: paths,
        fallback: true
    }
}

export default EventDetailsPage