
export const Loading = () => {
  return (
    <div className="container-loading-page">
      <div className="spinner-grow first-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow second-spinner mx-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow third-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow fourth-spinner ms-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
