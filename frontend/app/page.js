"use client" 
import { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import ContactsTable from './components/ContactsTable';
import Nav from './components/Nav';
import { getContacts } from './apis';

const Page = () => {
  const [contacts, setContacts] = useState([]);
  const fetchData = async () => {
    try {
      const contactsData = await getContacts();
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {fetchData();}, []);

  return (
    <div>
      <Nav/>
      <main>
        <AddContact/>
        <ContactsTable contacts={contacts} />
      </main>
    </div>
  );
};

export default Page;
