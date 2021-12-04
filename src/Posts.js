import Post from "./Post"

export default function Posts(){
    return(
        <div class = "posts">
        <Post user="meowed" content = "gato-telefone" userLike = "respondeai" likes = "101.523"/>
        <Post user="barked" content = "dog" userLike = "adorable_animals" likes= "99.159"/>
        </div>
    )
}