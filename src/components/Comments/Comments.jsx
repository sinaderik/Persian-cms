import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import Detail from '../Detail/Detail';
import './Comments.css';

export default function Comments() {

  const [allComments, setAllComments] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmedModal, setShowConfirmedModal] = useState(false)
  const [comment, setComment] = useState('');
  const [commentBody, setCommentBody] = useState('')
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);


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

  function updateComment() {

    fetch(`http://localhost:3000/api/comments/${editId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ body: commentBody })
    }).then((response) => {
      if (!response.ok) {
        alert('Something went wrong')
      }
      getAllComments();
      setShowEditModal(false)
    })
  }

  function acceptComment() {
    setShowConfirmedModal(false);
    alert('کامنت تایید شد')
    // console.log(editId)
    // fetch(`http://localhost:3000/api/comments/accept/${editId}`, {
    //     method: 'POST',
    // })
    // .then(response=>{
    //   response.json();
    // })
    // .then((response) => {
    //   console.log(response)
    //     if(!response.ok){
    //         alert('Something went wrong')
    //     }
    //     getAllComments();
    //     setShowConfirmedModal(false);
    // })


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
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>
                  <button onClick={() => {
                    setShowDeleteModal(true)
                    setDeleteId(item.id)
                  }}>حذف</button>
                  <button onClick={() => {
                    setCommentBody(item.body)
                    setEditId(item.id)
                    setShowEditModal(true)
                  }}>ویرایش</button>
                  <button>پاسخ</button>
                  <button onClick={() => {
                    setEditId(item.id)
                    setShowConfirmedModal(true)
                  }}>تایید</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      {showDetail ? <Detail hide={hideDetail}><h3>{comment}</h3></Detail> : null}
      {showEditModal ? <Detail hide={() => setShowEditModal(false)}>
        <>
          <textarea className='edit-textArea' cols="30" value={commentBody} onChange={(event) => setCommentBody(event.target.value)}></textarea>
          <br />
          <button className='mainButton' onClick={updateComment}>ثبت تغییرات</button>
        </>
      </Detail> : null}
      {showDeleteModal ? <DeleteModal confirmed={deleteComment} rejected={showDeleteHandler} title={"آیا از حذف اطمینان دارید ؟"} /> : null}

      {showConfirmedModal ? <DeleteModal confirmed={acceptComment} rejected={() => setShowConfirmedModal(false)} title="اطمینان دارید ؟" /> : null}

      {/* <DeleteModal /> */}

    </div>
  )
}
