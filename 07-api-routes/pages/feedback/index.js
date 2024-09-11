import { buildFeedbackPath, extractFeedback } from "../api/feedback"
import { useState } from "react"

function FeedbackPage(props){
    const [feedback, setFeedback] = useState([])
    const feedbackItems = props.feedbackItems
    function loadFeedbackHandler(id){
        fetch(`/api/${id}`).then(res => res.json()).then(data => {
            setFeedback(data.feedback)
        })
    }
    return (<>
    {feedback && <p>{feedback.email}</p>}
    <ul>
        {feedbackItems.map(item => <li key={item.id}>{item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)} >Show details</button> </li>)}
    </ul>
    </>)
}

export async function getStaticProps(){
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    return {
        props: {
            feedbackItems: data
        }
    }
}   

export default FeedbackPage