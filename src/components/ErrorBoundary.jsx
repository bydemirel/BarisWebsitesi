import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Bir şeyler yanlış gitti. Lütfen sayfayı yenileyin.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 