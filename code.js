

import { request } from 'http'
import onRequest from '/functions/submit'

async function doIt() {
    fetch('https://coststesting2.pages.dev/functions/submit')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch Error:', error);
  });
}

document.getElementById('button').addEventListener('click', doIt)