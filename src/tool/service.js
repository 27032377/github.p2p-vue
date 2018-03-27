import fetch from 'fetch'

export const servicePost = (url, data, scb, ecb) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    header: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    scb(response)
  }, error => {
    ecb(error)
  })
}

export const serviceGet = (url, scb, ecb) => {
  fetch(url, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    scb(response)
  }, error => {
    ecb(error)
  })
}
