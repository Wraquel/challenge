import { useEffect, useMemo, useState } from "react";
import TaskService from "./TaskService";

function useTaskService (){
  let [error, setError] = useState(false);

  let [tasksData, setTasks] = useState([]);


  useEffect(() => {
   
      const fetchData = async () => {
        const res = await TaskService();
        if (!res.error) {
          setTasks(res);
        } else {
          setError(true);
        }
      };

      fetchData();
    }
  , [tasksData, error]);

  const taskFilter = (tasks, done) => {
    return tasks?.filter((item) => (done ? item.completed : !item.completed));
  };
  const tasks = useMemo(() => {
    return tasksData
      ? {
          todo: taskFilter(tasksData, false),
          done: taskFilter(tasksData, true),
        }
      : null;
  }, [tasksData]);

  return { tasks, error };
};

export default useTaskService
