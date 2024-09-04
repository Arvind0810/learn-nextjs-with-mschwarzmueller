import { useRouter } from "next/router"
import EventList from "../../components/events/event-list"
import EventSearch from "../../components/events/events-search"
import { getAllEvents } from "../../dummy-data"

function EventsLandingPage(){
    const router = useRouter()
    const events = getAllEvents()

    function findEventHandler(year, month){
        console.log(year, month)
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return <>
        <EventSearch onSearch={findEventHandler} />
        <EventList items={events} />
    </>
}

export default EventsLandingPage