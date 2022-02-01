import Link from "next/link";
import { useRouter } from "next/router";

function Article({ atricle }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>{atricle.title}</h1>
      <p>{atricle.body}</p>
      <br />
      <Link href="/"> Go Back </Link>
    </>
  );
}

export default Article;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const atricle = await res.json();

  return {
    props: {
      atricle,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const atricles = await res.json();
  const ids = atricles.map((artilce) => artilce.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
