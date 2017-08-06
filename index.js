// Package Import
//**********
const axios = require('axios');
const dotenv = require('dotenv').config();

// Variables
//**********
const hapikey = process.env.HAPIKEY
const url = 'https://api.hubspot.com'

// GET
//**********
axios.get('/content/api/v2/pages', {
  baseURL: url,
  params: {
    'hapikey': hapikey,
    'limit': 1000,
    'is_draft': false
  }
})
  .then(res => {
    const pages = res.data.objects.filter(page => {
      return page.template_path.includes('Materialize')
    })

    const ids = pages.map(page => page.id)
    const templates = pages.map(page => page.template_path)

    // console.log(JSON.stringify(ids, null, 2));
    // console.log(JSON.stringify(templates, null, 2));
  })
  .catch(err => {
    console.log(err.response.data)
  })
