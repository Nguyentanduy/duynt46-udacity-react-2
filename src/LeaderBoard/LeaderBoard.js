import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { useSelector } from 'react-redux'

export default function LeaderBoard() {
  const data = useSelector(state => state.user.allUser)
  const userList = Object.values(data)
  return (
    <div>
      <NavBar />
      <div>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th scope="col">Users</th>
              <th scope="col">Answered</th>
              <th scope="col">Created</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {
              userList.sort((a, b) => {
                const sumA = Object.keys(a?.answers).length + a.questions.length
                const sumB = Object.keys(b?.answers).length + b.questions.length
                return sumB - sumA
              }).map(item => (
                <tr key={item.id} style={{marginTop:"20px"}}>
                  <td>{item.id}</td>
                  <td>{Object.keys(item.answers).length}</td>
                  <td>{item.questions.length}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
