import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import Detail from '../Detail/Detail';

import './Comments.css';

export default function Comments() {

  const [allComments, setAllComments] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [comment, setComment] = useState('');
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch('http://localhost:3000/api/comments')
      .then(response => response.json())
      .then(data => setAllComments(data))
      .catch(error => console.log(error))
  }
  function hideDetail() {
    setShowDetail(false)
  }
  function showCommentHandler(comment) {
    setComment(comment)
    setShowDetail(true)
  }
  function showDeleteHandler() {
    setShowDeleteModal(false)
  }
  function deleteComment() {
    fetch(`http://localhost:3000/api/comments/${deleteId}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(response => {
        getAllComments();
        setShowDeleteModal(false);
      })

  }


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
                <td><button onClick={() => showCommentHandler(item.body)}>مشاهده متن</button></td>
                <td>{item.data}</td>
                <td>{item.hour}</td>
                <td>
                  <button onClick={() => {
                    setShowDeleteModal(true)
                    setDeleteId(item.id)
                  }}>حذف</button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      {showDetail ? <Detail hide={hideDetail}><h3>{comment}</h3></Detail> : null}
      {showDeleteModal ? <DeleteModal confirmed={deleteComment} rejected={showDeleteHandler} /> : null}
      {/* <DeleteModal /> */}
    </div>
  )
}
