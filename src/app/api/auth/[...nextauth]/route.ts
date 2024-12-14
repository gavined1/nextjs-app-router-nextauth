import { gql } from "graphql-request";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type GraphQLVariables = {
  email: string;
  password: string;
};

const hasuraQuery = async (variables: GraphQLVariables) => {
  const query = gql`
    query users($email: String!, $password: String!) {
      users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
        id
        name
        email
        image
        created_at
        updated_at
      }
    }
  `;

  const res = await fetch(process.env.HASURA_PROJECT_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "hasura-credentials",
      name: "Hasura Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }

          const { data } = await hasuraQuery({
            email: credentials.email,
            password: credentials.password, // Note: In production, you should hash passwords
          });

          if (data.users.length > 0) {
            return {
              id: data.users[0].id.toString(),
              name: data.users[0].name,
              email: data.users[0].email,
              image: data.users[0].image,
            };
          } else {
            return null;
          }
        } catch (error) {
          throw new Error(
            JSON.stringify({ errors: "Authorize error", status: false })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn(userDetail) {
      if (Object.keys(userDetail).length === 0) {
        return false;
      }
      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/protected`;
    },
    async session({ session, token }) {
      if (session.user?.name) session.user.name = token.name;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
