// src/components/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../configfirebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-5">
          <Link to={`/post/${post.id}`} className="text-xl text-blue-500">
            {post.data.title}
          </Link>
          <p>{post.data.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
