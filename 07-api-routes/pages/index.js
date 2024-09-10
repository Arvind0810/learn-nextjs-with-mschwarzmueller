import { useRef } from 'react'

function HomePage() {
  const emailRef = useRef()
  const feedbackRef = useRef()
  
  function submitFormHandler(e){
    e.preventDefault()
    const enteredEmail = emailRef.current.value
    const enteredFeedback = feedbackRef.current.value

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback
    }
    
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
    .then((data) => console.log(data))
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email" >Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" row="5" ref={feedbackRef} ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
