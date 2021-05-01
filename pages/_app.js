//styles
import 'styles/globals.css';
// components
import Layout from 'components/layout/Layout';
//utilities

//dependencies

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
