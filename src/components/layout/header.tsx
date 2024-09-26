import Head from "next/head";

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Get Personalized College Recommendations."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </Head>
  );
};

export default Header;
