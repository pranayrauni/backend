require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "pranayrauni",
    "id": 59686672,
    "node_id": "MDQ6VXNlcjU5Njg2Njcy",
    "avatar_url": "https://avatars.githubusercontent.com/u/59686672?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pranayrauni",
    "html_url": "https://github.com/pranayrauni",
    "followers_url": "https://api.github.com/users/pranayrauni/followers",
    "following_url": "https://api.github.com/users/pranayrauni/following{/other_user}",
    "gists_url": "https://api.github.com/users/pranayrauni/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pranayrauni/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pranayrauni/subscriptions",
    "organizations_url": "https://api.github.com/users/pranayrauni/orgs",
    "repos_url": "https://api.github.com/users/pranayrauni/repos",
    "events_url": "https://api.github.com/users/pranayrauni/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pranayrauni/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pranay Singh",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "pranayrauni",
    "public_repos": 33,
    "public_gists": 2,
    "followers": 4,
    "following": 4,
    "created_at": "2020-01-09T09:17:45Z",
    "updated_at": "2025-04-14T06:35:44Z"
  }

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/twitter', (req, res) => {
    res.send('pranayrauni')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${port}`)
})