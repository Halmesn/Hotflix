import { getSession, signOut } from 'next-auth/client';

export default function Browse() {
  return (
    <div>
      <button
        onClick={() => {
          signOut({ callbackUrl: '/' });
        }}
        style={{ width: '20rem', height: '20rem' }}
      ></button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}
