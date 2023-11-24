import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Modal from './Modal';
import { addContact } from './../apis';

const AddContact = () => {
  const initialFormData = {first_name: '',last_name: '',email: '',phone_number: ''};
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const data = await addContact(formData);
      console.log('Contact added:', data);
      setFormData(initialFormData); 
      setErrors({});
      setModalOpen(false);
    } catch (error) {
      console.error('Error adding contact');
        setErrors({ ...errors, email: 'Phone or email already registered.', phone_number: 'Phone or email already registered.' });
      } 
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) {
      newErrors.first_name = 'First name is required';
    }
    if (!formData.last_name) {
      newErrors.last_name = 'Last name is required';
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone_number || !/^\+[0-9]{1,3}[0-9]{4,14}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Valid phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className='mb-15'>
      <button
        onClick={() => setModalOpen(true)}
        className="flex my-8 w-1/3 m-auto justify-center items-center gap-2 bg-emerald-400 hover:bg-green-600 font-semibold text-cyan-800 rounded-md p-2"
      >
        <p className='text-lg'>Add Contact</p> <AiOutlinePlus size={16} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (validateForm()) {
            handleAddContact(e);
          }
        }}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>First Name</label>
            <input type='text' name='first_name' placeholder='First Name' value={formData.first_name} onChange={handleInputChange} className={`border rounded-md w-full p-2 ${errors.first_name ? 'border-red-500 text-[13px]' : ''}`} />
            {errors.first_name && <p className='text-red-500 text-[13px]'>{errors.first_name}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Last Name</label>
            <input type='text' name='last_name' placeholder='Last Name' value={formData.last_name} onChange={handleInputChange} className={`border rounded-md w-full p-2 ${errors.last_name ? 'border-red-500' : ''}`} />
            {errors.last_name && <p className='text-red-500 text-[13px]'>{errors.last_name}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} className={`border rounded-md w-full p-2 ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <p className='text-red-500 text-[13px]'>{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Phone Number</label>
            <input type='tel' name='phone_number' placeholder='Phone Number' value={formData.phone_number} onChange={handleInputChange} className={`border rounded-md w-full p-2 ${errors.phone_number ? 'border-red-500' : ''}`} />
            {errors.phone_number && <p className='text-red-500 text-[13px]'>{errors.phone_number}</p>}
          </div>
          <button type='submit'className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Contact
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddContact;
