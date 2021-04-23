let config = {};

if (process.env.NODE_ENV === 'production') {
  config = {
    ...config,
    publicPath: '/spa-fcp-speedup'
  }
} else {
  config = {
    ...config,
    publicPath: ''
  }
}

export default config;