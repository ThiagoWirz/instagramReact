import Post from "./Post";
import PostVideo from "./PostVideo";

export default function Posts() {
  const posts = [
    {
      userImg: "meowed.svg",
      user: "meowed",
      content: "gato-telefone.svg",
      userLikeImg: "respondeai.svg",
      userLike: "respondeai",
      likes: "101.523",
      type: "img",
    },
    {
      userImg: "barked.svg",
      user: "barked",
      content: "dog.svg",
      userLikeImg: "adorable_animals.svg",
      userLike: "adorable_animals",
      likes: "99.159",
      type: "img",
    },
    {
      userImg: "barked.svg",
      user: "barked",
      content: "video",
      userLikeImg: "adorable_animals.svg",
      userLike: "adorable_animals",
      likes: "99.159",
      type: "video",
    },
  ];
  return (
    <div class="posts">
      {posts
        .filter((post) => post.type === "img")
        .map((post) => (
          <Post
            userImg={post.userImg}
            user={post.user}
            content={post.content}
            userLikeImg={post.userLikeImg}
            userLike={post.userLike}
            likes={post.likes}
          />
        ))}
      {posts
        .filter((post) => post.type === "video")
        .map((post) => (
          <PostVideo
            userImg={post.userImg}
            user={post.user}
            content={post.content}
            userLikeImg={post.userLikeImg}
            userLike={post.userLike}
            likes={post.likes}
          />
        ))}
    </div>
  );
}