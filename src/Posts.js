import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      user: "meowed",
      content: "gato-telefone",
      userLike: "respondeai",
      likes: "101.523",
    },
    {
      user: "barked",
      content: "dog",
      userLike: "adorable_animals",
      likes: "99.159",
    },
  ];
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          user={post.user}
          content={post.content}
          userLike={post.userLike}
          likes={post.likes}
        />
      ))}
    </div>
  );
}
