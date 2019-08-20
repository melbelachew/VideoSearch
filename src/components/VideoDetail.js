import React from 'react';

const VideoDetail = ({ video, videoId }) => {
    if (!video) {
        return <div>Loading....</div>
    };

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe title={video.snippet.title} src={videoSrc}/>
            </div>
            <div className='ui segment'>
                <div className='ui header'>
                    <h4>{video.snippet.title}</h4>
                </div>
                <div className=''>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail