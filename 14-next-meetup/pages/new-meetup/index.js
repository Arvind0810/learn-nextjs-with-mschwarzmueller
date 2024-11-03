// /new-meetup New Meetup page

import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function NewMeetUp(){

    function addMeetupHandler(enteredData){
        // e.preventDefault
        console.log(enteredData)
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetUp