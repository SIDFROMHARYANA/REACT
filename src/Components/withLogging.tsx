import React from 'react'

const withLogging = (WrappedComponent: any) => {
  class WithLogging extends React.Component {
    
    
    render() {
        return <div className='enhanced-card'>
            <WrappedComponent />
        </div>
    }
  }
  return WithLogging;
}

export default withLogging

 