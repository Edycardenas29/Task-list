import { useState } from 'react';
import { ChakraProvider, VStack, Stack, Input, Button, Checkbox, Text, Spacer } from '@chakra-ui/react';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer compras', completed: false },
    { id: 2, text: 'Preparar cena', completed: true },
    // Agrega más tareas según necesites
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText(''); // Limpiar el campo de entrada después de agregar la tarea
    }
  };

  return (
    <ChakraProvider>
      <VStack p="4" align="stretch" spacing="4">
        <Stack direction="row" spacing="4" align="center">
          <Input
            placeholder="Nueva tarea"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask}>
            Agregar tarea
          </Button>
        </Stack>
        <Spacer />
        <TaskList tasks={tasks} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
