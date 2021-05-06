import { getSession } from 'next-auth/client';

export default function Browse() {
  return <div></div>;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

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
