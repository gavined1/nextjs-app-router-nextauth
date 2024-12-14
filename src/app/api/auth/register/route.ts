import { NextResponse } from 'next/server';
import { gql } from 'graphql-request';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Hash the password to create a 60-character hash that matches CHAR(60)
    const hashedPassword = await bcrypt.hash(password, 10);

    const mutation = gql`
      mutation CreateUser($name: String!, $email: String!, $password: bpchar!) {
        insert_users_one(
          object: {
            name: $name,
            email: $email,
            password: $password
          }
        ) {
          id
          name
          email
        }
      }
    `;

    const response = await fetch(process.env.HASURA_PROJECT_ENDPOINT!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET!,
      },
      body: JSON.stringify({
        query: mutation,
        variables: { 
          name, 
          email, 
          password: hashedPassword
        },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('Hasura error:', result.errors);
      
      // Check if it's a unique constraint violation
      const isUniqueViolation = result.errors.some(
        (error: any) => 
          error.extensions?.code === 'constraint-violation' ||
          error.message.includes('Uniqueness violation') ||
          error.message.includes('unique constraint')
      );

      if (isUniqueViolation) {
        const field = result.errors[0].message.toLowerCase().includes('email') 
          ? 'email' 
          : 'username';
        return NextResponse.json(
          { message: `This ${field} is already registered. Please use a different ${field}.` },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: 'Registration failed. Please try again.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
