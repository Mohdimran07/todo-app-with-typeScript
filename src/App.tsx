import { FC, useState } from 'react';

import './style.css';
import { Task } from './models/task.model';
import { Header } from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { NotesLists } from './components/NotesLists';
import { CreateTask } from './components/CreateTask';

export const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: new Date().toString(),
      title: 'Meeting',
      text: 'Schedule Meeting',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ]);
  console.log(tasks);
  return (
    <div className="container">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesLists tasks={tasks} setTasks={setTasks} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateTask tasks={tasks} setTasks={setTasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
