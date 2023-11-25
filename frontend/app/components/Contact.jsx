import { FaEdit, FaTrash } from 'react-icons/fa';
import { deleteContact, updateContact } from './../apis';
import { useState } from 'react';
import ContactForm from './ContactForm';
import Modal from './Modal';

const Contact = ({ contact, index, onDeleteContact }) => {
  const { id, first_name, last_name, email, phone_number } = contact;
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ first_name, last_name, email, phone_number });

  const handleDelete = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this contact?');
    if (isConfirmed) {
      try {
        const deleted = await deleteContact(id);
        if (deleted) {
          onDeleteContact(id);
          alert('Contact deleted successfully!');
        } else {
          console.error('Failed to delete contact.');
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleContactUpdate = async (updatedContactData) => {
    try {
      await updateContact(updatedContactData, id);
      setModalOpen(false);
      window.location.reload();    } catch (error) {
      console.error('Failed to update contact:', error);
      alert('Failed to update contact. Please check your data.');
    }
  };

  return (
    <tr>
        <td className='font-semibold'>{index + 1}</td>
        <td>{`${first_name} ${last_name}`}</td>
        <td>{phone_number}</td>
        <td>{email}</td>
        <td>
          <button onClick={handleEdit} className='flex mb-1 justify-center items-center gap-6 text-blue-800'>
            Edit <FaEdit />
          </button>
          <button onClick={handleDelete} className='flex justify-center items-center gap-2 text-red-700'>
            Delete <FaTrash />
          </button>
          {modalOpen && (
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ContactForm initialData={formData} handleSubmit={handleContactUpdate} errors={errors} setErrors={setErrors} buttonName={"Update Contact"}/>
          </Modal>
          )}
        </td>
    </tr>
  );
};

export default Contact;
