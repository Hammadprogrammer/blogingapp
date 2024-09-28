// src/components/Post.jsx
import { useEffect, useState } from "react";
import { db } from "../configfirebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Post;
