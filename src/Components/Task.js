import { Box, Checkbox, Text, Button } from '@chakra-ui/react';

const Task = ({ task }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      my="2"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Checkbox defaultChecked={task.completed} />
      <Text ml="2" textDecoration={task.completed ? 'line-through' : 'none'} flex="1">
        {task.text}
      </Text>
      <Button size="sm" colorScheme="red">
        Eliminar
      </Button>
    </Box>
  );
};

export default Task;
