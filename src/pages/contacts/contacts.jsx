import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormContacts,
  GradientSubTitleContacts,
  GradientTextPhone,
  WraperDiv,
} from './contacts.styled';
import { ContactForm } from '../../components/contactForm/contactForm';
import { Filter } from '../../components/contactFilter/contactFilter';
import { ContactList } from '../../components/contactList/contactList';
import { fetchContacts } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WraperDiv>
      <div>{isLoading && 'Request in progress...'}</div>
      <GradientTextPhone>Phonebook</GradientTextPhone>
      <ContactForm />
      <GradientSubTitleContacts>Contacts</GradientSubTitleContacts>
      <FormContacts>
        <Filter />
        <ContactList />
      </FormContacts>
    </WraperDiv>
  );
}
