
import React, {useState, useRef, useEffect} from "react";


function App() {
  const videos = [
    {
      id: 1,
      url: "https://www.w3schools.com/html/mov_bbb.mp4"
      
    },
    {
      id: 2,
      url: "https://www.w3schools.com/html/movie.mp4"
    },
  ]
  
  const [likes, setLikes] = useState({})
  const [comments, setComments] = useState({})
  const videoRefs = useRef([])


// aoto play and scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play()
        } else {
          entry.target.pause()
        }
      })
    },
    {threshold: 0.8}
   )

   videoRefs.current.forEach((video) => {
    if (video) observer.observe(video)
   })

  }, [])

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const handleComment = (id) => {
    const text = prompt("Enter Comment")
    if (!text) return

    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }))
  }

  const handleShare = (url) => {
    navigator.clipboard.writeText(url)
    alert("Link Copied 🔗")
  }

  return (
    <div style={{backgroundColor: "black", color: "white", margin: 0, position: "center"}}>
      {videos.map((video, index) => (
        <div 
        key={video.id}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <video 
          ref={(el) => (videoRefs.current[index] = el)}
          src={video.url}
          loop
          autoPlay
          controls
          style={{
            maxWidth: "400px",
            height: "90vh",
             borderRadius: "10px",
            objectFit: "cover",
            position: "center",
           
            }}
            
            
          /> 

          <div style={{ marginTop: "10px"}}>
            <button onClick={() => handleLike(video.id)}>
              👍 Like {likes[video.id] || 0}
            </button>
            <button onClick={() => handleComment(video.id)}  style={{marginLeft: "10px"}}>
              💬 Comment
            </button>
            <button onClick={() => handleShare(video.id)}  style={{marginLeft: "10px"}}>
              🔗 Share
            </button>
            
          </div>

          <div style={{ marginTop: "10px"}}>
            {(comments[video.id] || []).map((c, i) => (
              <p key={i}>💬 {c}</p>
            ))}
          </div>

        </div>
      ))}
    </div>
  )

}

export default App;
