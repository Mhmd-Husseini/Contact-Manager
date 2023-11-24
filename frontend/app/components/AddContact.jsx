import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { addContact } from './../apis';

const AddContact = () => {
  const initialFormData = { first_name: '', last_name: '', email: '', phone_number: '' };
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleAddContact = async (formData) => {
    try {
      const data = await addContact(formData);
      console.log('Contact added:', data);
      setErrors({});
      setModalOpen(false);
    } catch (error) {
      console.error('Error adding contact');
      setErrors({ ...errors, email: 'Phone or email already registered.', phone_number: 'Phone or email already registered.' });
    }
  };

  return (
    <div className='mb-15'>
      <button onClick={() => setModalOpen(true)} className="flex my-8 w-1/3 m-auto justify-center items-center gap-2 bg-emerald-400 hover:bg-green-600 font-semibold text-cyan-800 rounded-md p-2" >
        <p className='text-lg'>Add Contact</p> <AiOutlinePlus size={16} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ContactForm initialData={initialFormData} handleSubmit={handleAddContact} errors={errors} setErrors={setErrors} />
      </Modal>
    </div>
  );
};

export default AddContact;
