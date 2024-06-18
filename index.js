document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    const ratings = document.getElementsByName('rating')
    let isChecked = false
    ratings.forEach((rating) => {
      if (rating.checked) {
        isChecked = true
      }
    })

    if (!isChecked) {
      e.preventDefault()
      alert('Please select a rating before submitting.')
    }
  })
})
