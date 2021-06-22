import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={502}
    height={184}
    viewBox="0 0 502 184"
    backgroundColor="#f3f3f3"
    foregroundColor="#fff"
    {...props}
  >
    <rect x="0" y="5" rx="0" ry="0" width="98" height="36" />
    <rect x="360" y="5" rx="10" ry="10" width="99" height="36" />
    <rect x="0" y="60" rx="0" ry="0" width="459" height="20" />
    <rect x="0" y="104" rx="0" ry="0" width="459" height="20" />
  </ContentLoader>
)

export default Loader

