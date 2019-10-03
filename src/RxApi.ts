import fetch from 'node-fetch';
import { of } from 'rxjs';

const getUsers = fetch('https://koreanjson.com/users');
of(getUsers).subscribe(async (requestApi: Request) => {
  const data = await requestApi;

  console.log(await data.json());
});