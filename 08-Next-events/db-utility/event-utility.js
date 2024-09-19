import DB from "./config";

const client = await DB()
        
const db = client.db('events')

export async function getFeaturedEvents(){
    return await db.collection('events').find({isFeatured: true}).sort({_id: -1}).toArray()
}

export async function getAllEvents() {
    return await db.collection('events').find().sort({_id: -1}).toArray()
  }
  
//   export async function getFilteredEvents(dateFilter) {
//     const { year, month } = dateFilter;
  
//     let filteredEvents = DUMMY_EVENTS.filter((event) => {
//       const eventDate = new Date(event.date);
//       return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//     });
  
//     return filteredEvents;
//   }
  
  export async function getEventById(id) {
    return await db.collection('events').findOne({_id: id}).sort({_id: -1}).toArray()
  }