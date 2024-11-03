import MeetupList from "@/components/meetups/MeetupList"
import { useEffect, useState } from "react"

const DUMMY_MEETUPS = [{
  "id": 1,
  "title": "Pure Country",
  "image": "http://dummyimage.com/1600x800.png/dddddd/000000",
  "address": "06853 Lunder Plaza",
  "description": "Drama|Musical|Romance"
}, {
  "id": 2,
  "title": "Kansas City",
  "image": "http://dummyimage.com/1600x800.png/5fa2dd/ffffff",
  "address": "18413 Susan Crossing",
  "description": "Crime|Drama|Musical|Thriller"
}, {
  "id": 3,
  "title": "Holy Land, The",
  "image": "http://dummyimage.com/1600x800.png/5fa2dd/ffffff",
  "address": "2135 New Castle Street",
  "description": "Drama"
}, {
  "id": 4,
  "title": "Sex and the City 2",
  "image": "http://dummyimage.com/1600x800.png/ff4444/ffffff",
  "address": "5073 Kinsman Parkway",
  "description": "Comedy|Drama|Romance"
}, {
  "id": 5,
  "title": "Babe Ruth Story, The ",
  "image": "http://dummyimage.com/1600x800.png/cc0000/ffffff",
  "address": "48344 Butternut Crossing",
  "description": "Drama"
}, {
  "id": 6,
  "title": "Wolf Man, The",
  "image": "http://dummyimage.com/1600x800.png/5fa2dd/ffffff",
  "address": "9 Cardinal Junction",
  "description": "Drama|Fantasy|Horror"
}, {
  "id": 7,
  "title": "Murphy's War",
  "image": "http://dummyimage.com/1600x800.png/5fa2dd/ffffff",
  "address": "999 Grayhawk Court",
  "description": "War"
}, {
  "id": 8,
  "title": "Destruction Force",
  "image": "http://dummyimage.com/1600x800.png/dddddd/000000",
  "address": "525 Sunnyside Circle",
  "description": "Crime"
}, {
  "id": 9,
  "title": "Splash",
  "image": "http://dummyimage.com/1600x800.png/dddddd/000000",
  "address": "2524 Arapahoe Avenue",
  "description": "Comedy|Fantasy|Romance"
}, {
  "id": 10,
  "title": "Thesis (Tesis)",
  "image": "https://dummyimage.com/1600x800.png/5fa2dd/ffffff",
  "address": "9 Jana Park",
  "description": "Drama|Horror|Thriller"
}]

function HomePage(){
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    // send request to backend
    setLoadedMeetups(DUMMY_MEETUPS)
  })
  return (
    <>
    <MeetupList meetups={loadedMeetups}/>
    </>
  )
}

export default HomePage