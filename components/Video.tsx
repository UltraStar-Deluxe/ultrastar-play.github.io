const Video = (props: { src: string }) =>
{
    return (
        <video  controls>
            <source src={ props.src } type="video/webm" />
            Your browser does not support the video tag.
        </video> 
    )
}

export default Video;