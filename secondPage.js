document.addEventListener('DOMContentLoaded', () => {
  const getQueryParams = () => {
    const params = {}
    const queryString = window.location.search.substring(1)
    const regex = /([^&=]+)=([^&]*)/g
    let m
    while ((m = regex.exec(queryString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
    }
    return params
  }

  const params = getQueryParams()
  const rating = params.rating

  document.getElementById('ratingValue').textContent = rating
})
