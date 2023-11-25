"use client" 
import { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import ContactsTable from './components/ContactsTable';
import Nav from './components/Nav';
import { getContacts } from './apis';

const Page = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const contactsData = await getContacts();
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.first_name} ${contact.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Nav />
      <main className="p-4">
        <AddContact />
        <input type="text" id="searchInput" placeholder="Search contacts" value={searchTerm} onChange={handleSearch} 
        className="w-3/12 px-3 py-2 border rounded-md text-gray-800 border-gray-400 focus:outline-none focus:border-blue-500 mb-2 ml-auto"/>
        <ContactsTable contacts={filteredContacts} />
      </main>
    </div>
  );
};

export default Page;
