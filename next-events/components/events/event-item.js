import Link from "next/link"

function EventItem(props){
    const {title, image, date, location, id } = props

    const newDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formatedAddress = location.replace(', ', '\n')
    return <li key={id}>
        <img src={`/${image}`} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{newDate}</time>
                </div>
                <div>
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div>
                <Link  href={`/events/${id}`} >Explore events</Link>
            </div>
        </div>
    </li>
}

export default EventItem