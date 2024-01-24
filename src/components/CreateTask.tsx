import { FC, useState, Dispatch, SetStateAction, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Task } from '../models/task.model';

interface ITaskProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const CreateTask: FC<ITaskProps> = ({ tasks, setTasks }) => {
  const [error, setError] = useState<string>('');
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current.value === '' || textRef.current.value === '') {
      return setError('All Fields are mandatory');
    }
    setError('');
    setTasks([
      ...tasks,
      {
        id: new Date().toString(),
        title: titleRef.current.value,
        text: textRef.current.value,
        color: colorRef.current.value,
        date: new Date().toString(),
      },
    ]);
    titleRef.current.value = '';
    textRef.current.value = '';
    colorRef.current.value = '';
  };
  return (
    <>
      <h1>Create Task</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mx-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            ref={titleRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Text"
            ref={textRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};
