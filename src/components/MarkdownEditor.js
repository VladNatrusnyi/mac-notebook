import {useContext, useEffect, useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Context from "../Context";

export const MarkdownEditor = ({body, postId}) =>  {

  const {updateData} = useContext(Context)


  const [inputBody, setInputBody] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];


  useEffect(() => {
    setInputBody(body)
  }, [])

  useEffect(() => {
    updateData(postId,inputBody)
  }, [inputBody])


  const handleQuillChange = (value) => {
    setInputBody(value)
  };

  return (
    <div>
      <ReactQuill
        style={{height: '100%'}}
        value={inputBody}
        onChange={handleQuillChange}
        modules={modules}
        formats={formats}
        placeholder="Введіть текст..."
      />
    </div>
  );
}
