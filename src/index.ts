import { User } from './models/User'
import { UserList } from './views/UserList'

const users =  User.buildUserCollection()

users.on('change', () => {
  const rootEL = document.getElementById('root')
  if (rootEL) {
    new UserList(users, rootEL).render()
  }
})

 users.fetch()
 console.log(users.models.length)