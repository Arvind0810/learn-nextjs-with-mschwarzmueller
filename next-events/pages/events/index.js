import { useRouter } from "next/router"
import EventList from "../../components/events/event-list"
import EventSearch from "../../components/events/events-search"
import { getAllEvents } from "../../helpers/api-util"
import Head from "next/head"

export async function getStaticProps(context){
    const events = await getAllEvents()

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

function EventsLandingPage(props){
    const router = useRouter()
    const events = props.events

    function findEventHandler(year, month){
        console.log(year, month)
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return <>
        <Head >
            <title>All Events</title>
            <meta 
            name="description"
            content="Find a lot of great Events that allow you to evolve..."
            />
        </Head>
        <EventSearch onSearch={findEventHandler} />
        <EventList items={events} />
    </>
}

export default EventsLandingPage