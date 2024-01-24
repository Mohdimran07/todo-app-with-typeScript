import { Dispatch, FC, SetStateAction } from 'react';
import { Task } from '../models/task.model';
import { Tasks } from './tasks';

interface ITaskListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const NotesLists: FC<ITaskListProps> = ({ tasks, setTasks }) => {
  const handleDelete = (id: string) => {
    // console.log('***********', id)
    setTasks(tasks.filter((item) => item.id !== id));
  };
  const renderTasks = (): JSX.Element[] => {
    return tasks.map((item) => {
      return <Tasks key={item.id} task={item} handleDelete={handleDelete} />;
    });
  };
  return <div className="mt-3">{renderTasks()}</div>;
};
