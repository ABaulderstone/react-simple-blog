import React, {useState} from 'react';
import {useGlobalState} from '../config/globalState';
import useForm from '../config/useForm';

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
   const {values, handleChange, handleSubmit} = useForm(onSubmit);
    //styling
    const divStyles = {
       display: 'grid',
       width: '100vw',
   }
   const inputStyles = {
       width: '70vw',
       margin: '0.5em'
   }
   const labelStyles = {
       fontSize: '1.2em'
   }
   const textAreaStyles = {
       height: '200px',
       margin: '0.5em',
       width: '70vw'
   }

   //state 
    const initalFormState = {
        title: "",
        category: "",
        content: ""
    }
    



    
 
   
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" value={values.title} placeholder="Enter a title" onChange ={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles}  type="text" name="category" value={values.category} onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea style={textAreaStyles} type="text" name="content" value={values.content} placeholder="Enter a Post" onChange={handleChange} />
            </div>
            <input type='submit' value='Add a Post'></input>
        </form>
    )
}

export default NewBlogPost;
