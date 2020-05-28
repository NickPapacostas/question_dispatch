import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const QueueSidebar = () => {
  const [queues, setQueues] = useState([
    {
      name: "active_questions",
      shortname: "AQ",
      has_unread_messages: true
    },
    {
      name: "queued_questions",
      shortname: "QQ",
      has_unread_messages: false
    },
    {
      name: "inactive_questions",
      shortname: "IA",
      has_unread_messages: false
    },
    {
      name: "resolved_questions",
      shortname: "RQ",
      has_unread_messages: false
    }
  ])

  return (
    <div className="queue-sidebar-buttons">
      { queues.map( queue => <button key={queue.shortname}>{queue.shortname}</button> ) }
    </div>
  )
}

export default QueueSidebar