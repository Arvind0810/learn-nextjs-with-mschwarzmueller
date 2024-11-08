import Link from "next/link"
import classes from './event-item.module.css'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import Image from "next/image"

function EventItem(props){
    const {title, image, date, location, id } = props

    const newDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formatedAddress = location.replace(', ', '\n')
    return <li key={id} className={classes.item}>
        <Image src={`/${image}`} alt={title} width={250} height={140} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{newDate}</time>
                </div>
                <div className={classes.address} >
                    <AddressIcon />
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div className={classes.actions} >
                <Link  href={`/events/${id}`} className={classes.btn} ><span>Explore events</span> <span className={classes.icon} ><ArrowRightIcon /></span></Link>
            </div>
        </div>
    </li>
}

export default EventItem