import { useState } from 'react';

const ContactForm = ({ initialData, handleSubmit, errors, setErrors }) => {
    const [formData, setFormData] = useState(initialData);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.first_name.trim()) {
        newErrors.first_name = 'First name is required';
      }
      if (!formData.last_name.trim()) {
        newErrors.last_name = 'Last name is required';
      }
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
      }
      if (!formData.phone_number.trim() || !/^\+[0-9]{1,3}[0-9]{4,14}$/.test(formData.phone_number)) {
        newErrors.phone_number = 'Valid phone number is required';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmitForm = (e) => {
      e.preventDefault();
      if (validateForm()) {
        handleSubmit(formData);
      }
    };

  return (
    <form onSubmit={(e) => handleSubmitForm(e, formData)}>
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
  );
};

export default ContactForm;
