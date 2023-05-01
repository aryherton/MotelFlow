import { NextResponse } from 'next/server';

import { UserService } from '../../service/User.service';
const userService = new UserService();

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const idParams = searchParams.get('id');

  if (idParams) {
    const user = await userService.getUserById(idParams);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', user);

    if (user) return NextResponse.json(user);
  } else {
    const users = await userService.getAllUser();
    console.log('???????????????', users);

    if (users) return NextResponse.json(users);
  }

  return new Response('Hello, Next.js!');
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await userService.createUser(body);

  return NextResponse.json(user);
}
