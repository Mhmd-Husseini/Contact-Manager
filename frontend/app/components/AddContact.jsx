import {AiOutlinePlus} from 'react-icons/ai'

const AddContact = () => {
  return (
    <div>
      <button className='w-full flex justify-center items-center gap-2'>
        <p className='text-lg'>Add Contact</p> <AiOutlinePlus size={16}/>
      </button>
    </div>
  )
}

export default AddContact
