"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LOGIN_MUTATION } from '@/graphql/mutations';
import { useMutation } from '@apollo/client';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {

    try {
      const { data } = await login({
        variables: { email, password },
      });

      localStorage.setItem('access_token', data.login.access_token);
      localStorage.setItem('refresh_token', data.login.refresh_token);

      const decodedToken = jwtDecode(data.login.access_token) as { exp: number };

      location.replace('/my-info');
    } catch (err) {
      console.error('Ошибка при логине:', err);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input value={password} onChange={e => setPassword(e.target.value)} id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter >
          <div className="space-y-5">
            <Button type='button' onClick={handleLogin} className="w-full">
              {loading ? 'Loading...' : 'Login'}
            </Button>

            {error && <p className="text-red-500 mt-4">{error.message}</p>}
          </div>
        </CardFooter>


      </Card>
    </div>
  )
}


export default Login