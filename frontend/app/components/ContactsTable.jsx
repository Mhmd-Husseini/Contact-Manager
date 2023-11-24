import Contact from './Contact'; 
import { useState, useEffect } from 'react';

const ContactsTable = ({ contacts }) => {
  const [renderedContacts, setRenderedContacts] = useState(contacts); 

  useEffect(() => {
    setRenderedContacts(contacts);
  }, [contacts]); 

  const handleDeleteContact = (deletedId) => {
    setRenderedContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== deletedId));
  };

  return (
    <div className="overflow-x-auto mb-24">
      <table className="table table-zebra">
        <thead className="text-lg">
          <tr className='bg-cyan-800 text-cyan-50'>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderedContacts.map((cont, index) => (
            <Contact key={cont.id} contact={cont} index={index} onDeleteContact={handleDeleteContact} /> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
