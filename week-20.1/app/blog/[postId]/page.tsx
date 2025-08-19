import axios from "axios"

export default async function ({ params }: any) {
  const postId = await params.postId;
  const response = await axios.get(`https://dummyjson.com/posts/${postId}`)

  return (
    <>
      <div> {response.data.body}</div>
    </>
  );
}
