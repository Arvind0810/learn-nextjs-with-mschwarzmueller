import Head from "next/head"
import EventList from "../components/events/event-list"
import { getFeaturedEvents } from "../helpers/api-util"

function HomePage(props) {

  return (
    <div>
      <Head >
        <title>NextJS Events</title>
        <meta 
          name="description"
          content="Find a lot of great Events that allow you to evolve..."
        />
      </Head>
        <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  }
}

export default HomePage