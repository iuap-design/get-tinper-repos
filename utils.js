
import axios from 'axios'

export function getRepos(orgName){
  return axios.get(`https://api.github.com/orgs/${orgName}/repos`)
}

export function getReposFullName (data){
  var arr = []

  for(var item in data) {
    arr.push(item.full_name)
  }

  return arr
}
