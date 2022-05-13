import { FetchService } from "./FetchService";

export default async function TaskService() {
  const url = `http://localhost:3008/api/tasks/`;

  return await FetchService.call(url);
}





