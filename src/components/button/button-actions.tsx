import React from 'react'

const ButtonActions: React.FC = () => {
  function handleDelete(val : any) {
    console.log(val)
  }
  function handleEdit(val : any){
    console.log(val)
  }
  return (
    <div className=" space-x-2">
      <button className="py-3 px-2 bg-blue-400 rounded text-black" type="button" onClick={handleEdit}>Edit</button>
      <button className="py-3 px-2 bg-red-400 rounded text-black" type="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ButtonActions
