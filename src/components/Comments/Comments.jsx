import React, { useEffect, useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import DeleteModal from '../DeleteModal/DeleteModal';
import useFetch from '../../../hooks/useFetch'
import './Comments.css';

export default function Comments() {

  const [allComments, setAllComments] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/comments')
      .then(response => response.json())
      .then(data => setAllComments(data))
      .catch(error => console.log(error))
  }, []);
  // console.log(allComments)
  return (

    <div className='cms-main'>
      {/* <ErrorBox message="هیچ کامنتی یافت نشد" /> */}
      <table className='cms-table'>
        <thead>
          <tr>
            <th>اسم کاربر</th>
            <th>محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.userID}</td>
                <td>{item.productID}</td>
                <td><button>مشاهده متن</button></td>
                <td>{item.data}</td>
                <td>{item.hour}</td>
                <td>
                  <button>حذف</button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      {/* <DeleteModal /> */}
    </div>
  )
}
