import { VStack } from '@chakra-ui/react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <VStack align="stretch" spacing="4">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </VStack>
  );
};

export default TaskList;

