import { FaEdit, FaTrash } from 'react-icons/fa';

const Contact = ({ contact, index }) => {
  const { first_name, last_name, email, phone_number } = contact;

  return (
    <tr>
      <td className='font-semibold'>{index + 1}</td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{phone_number}</td>
      <td>{email}</td>
      <td >
        <button className='flex mb-1 justify-center items-center gap-6 text-blue-800'>Edit <FaEdit /></button>
        <button className='flex justify-center items-center gap-2 text-red-700'>Delete <FaTrash /></button>
      </td>
    </tr>
  );
};

export default Contact;
