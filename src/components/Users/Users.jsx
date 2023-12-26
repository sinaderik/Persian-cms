import React, { useEffect, useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import DeleteModal from '../DeleteModal/DeleteModal'
import './Users.css'

export default function Users() {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


  useEffect(() => {
    getAllUsers();
  }, [])

  function getAllUsers() {
    fetch(`http://localhost:3000/api/users`)
      .then(response => response.json())
      .then(response => {
        setUsers(response)
      })
      .catch(error => console.log(error))
  }

  function deleteUser() {
    console.log(userId)
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => {
        if (!response.ok) {
          console.log('something went wrong')
        }
        console.log(response)
        getAllUsers();
        setShowDeleteModal(false)
      })
      .catch(error => {
        console.error('Error during DELETE request:', error);
      });

  }

  return (
    <>
      {users.length <= 0 ? <ErrorBox message="هیچ کاربری یافت نشد" /> : null}
      <div className="cms-main">
        <h1 className="cms-title">لیست کاربران</h1>
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => {
                    setShowDeleteModal(true);
                    setUserId(user.id)
                  }}>حذف</button>
                  <button>جزییات</button>
                  <button>ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal ? <DeleteModal confirmed={deleteUser} rejected={() => setShowDeleteModal(false)} title={'آیا از حذف کاربر اطمینان دارید ؟'} /> : null}
    </>
  );
}
