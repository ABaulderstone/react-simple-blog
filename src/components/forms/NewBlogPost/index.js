import React, {useState} from 'react';
import {useGlobalState} from '../../../config/globalState';
import useForm from '../useForm';
import styles from './styles';
import Input from '../Input';
import TextArea from '../TextArea';
import validate from './validationRules';

function NewBlogPost(props) {

   const {dispatch} = useGlobalState();
   const {history, nextId} = props

   const onSubmit = () => {
        
    const newPost = {
        _id: nextId,
        title: values.title,
        category: values.category,
        content: values.content,
        modified_date: new Date()
    }
    dispatch({type: "addBlogPost", data: newPost})
    history.push('/')
}
   const {values, errors, handleChange, handleSubmit} = useForm(onSubmit, validate);
 

    return (
        <form onSubmit={handleSubmit}>
            <Input styles={styles} error={errors.title} label="Title" type="text" name="title" value={values.title} placeholder="Enter a title" onChange ={handleChange}/>
            <Input styles={styles} label="Category" type="text" name="category" value={values.category} onChange={handleChange}/>
            <TextArea styles={styles} label="Content" type="text" name="content" value={values.content} placeholder="Enter a Post" onChange={handleChange} />
            <input type='submit' value='Add a Post'></input>
        </form>
    )
}

export default NewBlogPost;
