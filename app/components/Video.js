import React from 'react'

const Video = () => {
  return (
    <div className="video-area-box">
    <div className="container">
        <div className="video-view-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
            <div className="video-image">
                <img src="images/video.jpg" alt="image"/>
            </div>

            <a href="https://www.youtube.com/watch?v=ODfy2YIKS1M" className="video-btn popup-youtube">
                <i className="ri-play-mini-fill"></i>
            </a>
        </div>
    </div>
</div>
  )
}

export default Video
