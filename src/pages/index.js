import {useEffect, useMemo, useState} from "react";
import { useRouter } from "next/router";
import { getDocs, getFirestore, collection} from "firebase/firestore";
import PostCard from "@/app/components/PostCard";
import styles from "@/app/components/components.module.css"
export default function Dashboard({ isLoggedIn }) {
const router = useRouter();
const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
    async function getAllPosts() {
        const postsArray = [];
        const db = getFirestore();
        const postsQuery = await getDocs(collection(db, "posts"));

        postsQuery.forEach((post) => {
            postsArray.push({ id: post.id, ...post.data() });
        });
        setAllPosts(postsArray);
    }
    getAllPosts();
    }, []);

    return (
        <main>
        <div className={styles.MOTD}>
            <h2> Welcome to OpenArt, a gallery style social media site for sharing generative art.</h2>
            <p> Make an account, view other people's content, and share the generative art you find! </p>
        </div>
        {allPosts.map((post, i) => (
           <PostCard post={post} key={i} />
        ))}
        </main>
    );
}