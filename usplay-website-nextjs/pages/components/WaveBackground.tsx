var waveBackgroundCount = 0;
const WaveBackground = (props: { colorFrom: string, colorTo: string, flipX?: boolean, flipY?: boolean }) => 
{
    const gradientId = `waveBackground_gradient_${waveBackgroundCount++}`;

return (

<div style={{ width: '100%', height: '60px', bottom: '0', transform: `rotateX(${props.flipY ? 180 : 0}deg) rotateY(${props.flipX ? 180 : 0}deg)` }}>
    {/* Original SVG generated with https://svgwave.in */}
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 281"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        preserveAspectRatio="none">
        <defs>
            <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor={props.colorFrom}></stop>
                <stop offset="95%" stopColor={props.colorTo}></stop>
            </linearGradient>
        </defs>
        <path
    d="m 0,281.38666 c 0,0 0,-249.999998 0,-249.999998 C 160.26667,11.119992 320.53333,-9.1466679 489,4.3866621 657.46667,17.919992 834.13333,65.253332 994,75.386662 c 159.8667,10.13333 302.9333,-16.93333 446,-44 0,0 0,249.999998 0,249.999998 z"
    stroke="none"
    strokeWidth="0"
    fill={`url(#${gradientId})`}
    className="transition-all duration-300 ease-in-out delay-150 path-0"
    id="path9" />
    </svg>
</div>

)
}

export default WaveBackground;