import React from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import DeleteModal from '../DeleteModal/DeleteModal';
import './Comments.css';

export default function Comments() {
  return (
    <div>
      <ErrorBox message="هیچ کامنتی یافت نشد" />
      {/* <DeleteModal /> */}
    </div>
  )
}
