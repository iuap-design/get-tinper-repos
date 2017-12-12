
import { getRepos, getReposFullName } from './utils'
import fs from 'fs'

const orgName = ["iuap-design", "tinper-bee", "tinper-uba", "uba-templates"]
const host = "https://github.com/"

orgName.forEach((org, index) => {
  getRepos(org)
    .then(data => {
      const allRepos = getReposFullName(data);

      fs.write()
    })
})
