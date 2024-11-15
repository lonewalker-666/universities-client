
interface Props {
  value: number
  size?: number
  width?: number
  progressColor?: string
  progressBarColor?: string
  progressTextColor?: string
}
const CircularProgress = (props: Props) => {
  const {
    value,
    size,
    width,
    progressColor,
    progressBarColor,
    progressTextColor
  } = props
  const radius = size || 70 // Radius of the circle
  const strokeWidth = width || 15 // Width of the progress stroke
  const circumference = 2 * Math.PI * radius // Circumference of the circle
  const progress = (value / 100) * circumference // Progress value as a portion of circumference

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <svg
        width={2 * (radius + strokeWidth)}
        height={2 * (radius + strokeWidth)}
        viewBox={`0 0 ${2 * (radius + strokeWidth)} ${
          2 * (radius + strokeWidth)
        }`}
      >
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill='transparent'
          stroke={progressBarColor || '#7e55c81a'} // Background circle color
          strokeWidth={strokeWidth}
        />
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill='transparent'
          stroke={progressColor || '#6f42c1e5'} // Progress color
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap='round'
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          fontSize: '20px',
          fontWeight: 'bold',
          color: progressTextColor || '#6f42c1e5'
        }}
      >
        {`${value?.toFixed(0)}%`}
      </div>
    </div>
  )
}

export default CircularProgress
