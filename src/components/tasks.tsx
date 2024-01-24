import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Task } from '../models/task.model';

interface ITaskProps {
  task: Task;
  handleDelete: (id: string) => void
}

export const Tasks: FC<ITaskProps> = ({ task, handleDelete }) => {
  console.log('^^^^^^^^^^^^^', task);
  
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: task.color }}>
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.text}</Card.Text>
          <Card.Subtitle className="text-muted">{task.date}</Card.Subtitle>
          <Button className="mt-3" variant="danger" onClick={() => handleDelete(task.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
