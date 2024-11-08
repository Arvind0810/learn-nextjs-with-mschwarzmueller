import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [eventComment, setEventComment] = useState([])

  const [showComments, setShowComments] = useState(false);

  useEffect(()=> {
    if(showComments){
      fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => setEventComment(data.comments))
    }
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch('/api/comments/'+eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={eventComment} />}
    </section>
  );
}

export default Comments;
