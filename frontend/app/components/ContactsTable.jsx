import React from 'react';
import Contact from './Contact'; 

const ContactsTable = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead className="text-lg">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((cont, index) => (
            <Contact key={cont.id} contact={cont} index={index}/> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
