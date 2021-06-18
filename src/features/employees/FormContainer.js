import { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { employeesAction } from './slice';
import Form from './Form';
import Modal from './Modal';

export default function FormContainer(){

  const [ isVisible , setIsVisible ] = useState(false);

  const onSetIsVisible = (active) => { 
    setIsVisible(active);
  }

  const { register, handleSubmit , formState: { errors } , reset } = useForm();

  const { request } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const onSubmit = ( data ) => {
    dispatch(employeesAction.addEmployees(data)); 
  }

  useEffect(() => {
    if(request.data) setIsVisible(true);
    reset();
  }, [request.data , reset]);


  return <>

    <Form 
      handleSubmit={ handleSubmit(onSubmit) } 
      register={register} 
      errors={errors}
    />

    <Modal 
      isVisible={isVisible} 
      data={request.data} 
      onSetIsVisible={onSetIsVisible} 
    />

  </>
}