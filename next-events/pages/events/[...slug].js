import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import Link from "next/link"

function FilteredEventPage(){
    const router = useRouter()
    const filterData = router.query.slug

    if(!filterData){
        return <h1 className="center">Loading...</h1>
    }
    const year = Number(filterData[0])
    const month = Number(filterData[1])
    if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 0 || month > 12){
        return <h1 className="center" >Invalid filter, Please adjust your valu</h1>
    }

    const filteredEvents = getFilteredEvents({year, month})
    if(!filteredEvents || filteredEvents.length === 0){
        return <>
            <h1 className="center" >No event found for the chosen filter!</h1>
            <div className="center">
                <Link href="/events" className="btn">Show all events</Link>
            </div>
        </>
    }
    const date = new Date(year, month - 1)
    return <>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />
    </>
}

export default FilteredEventPage