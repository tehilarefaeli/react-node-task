import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import {  object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseRequest from 'database/api/api';
import { useNavigate } from 'react-router-dom';

const registerSchema = object({
    user: string()
      .min(3,'User Name must be more than 3 characters'),
    password: string()
      .min(3,'password must be  more than 5 characters'),
  });
  export type RegisterInput = TypeOf<typeof registerSchema>;

  
  export default function Login() {

    const {
      register,
      formState: { errors, isSubmitSuccessful },
      reset,
      handleSubmit,
    } = useForm<RegisterInput>({
      resolver: zodResolver(registerSchema),
    });

  
    const navigate = useNavigate();
    const onSubmitHandler =( data:any )=>{

      BaseRequest('users').then((res) =>{
        const user=data.user;
        const pass = data.password;
        let checker = 0
        Object.values(res.data).map((item:any) => {
          if(item.userName == user && item.password == pass){
            navigate('/data')
            checker=1
            
          }}
        )
        if(!checker){
          alert('not correct data');
        }

      }).catch((e:any) =>{
        throw(e);
        
      })

    }
    return(
                 <Box component='form'
                 noValidate
                autoComplete='off'
                    onSubmit={handleSubmit(onSubmitHandler)}>
                    <TextField
                        fullWidth
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="User Name"
                        type="text"
                        error={!!errors['user']}
                        helperText={errors['user'] ? errors['user'].message : ''}
                        {...register('user')}
                    />
                    <br/>

                    <TextField
                        autoFocus
                        fullWidth
                        margin="dense"
                        id="pass"
                        label="Password"
                        type="text"
                        error={!!errors['password']}
                        helperText={errors['password'] ? errors['password'].message : ''}
                        {...register('password')}
                    />
                    
                    <br/>
                  
                
                        <Button
                            fullWidth
                            color="primary"
                            type="submit"
                        >
                            Login
                        </Button>

                    </Box>
                  )  }
