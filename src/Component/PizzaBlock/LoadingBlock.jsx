import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="291" rx="0" ry="0" width="280" height="30" />
        <rect x="1" y="336" rx="5" ry="5" width="280" height="84" />
        <rect x="-1" y="426" rx="4" ry="4" width="93" height="90" />
        <rect x="132" y="427" rx="3" ry="3" width="149" height="33" />
        <rect x="172" y="444" rx="0" ry="0" width="3" height="1" />
        <circle cx="132" cy="137" r="134" />
    </ContentLoader>
)

export default LoadingBlock