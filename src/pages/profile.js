import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "@/app/components/UserProfileCard";
import {query, collection, getFirestore, where, getDocs,} from "firebase/firestore";


export default function UserProfile({isLoggedIn, loginInformation}) {
    const router = useRouter;
    const [user, setUser] = useState({});

    useEffect(() => {
        if(!isLoggedIn) router.push("/login")
    },[isLoggedIn])

    useEffect(() => {
        async function getUser() {
            let user = {};
            const db = getFirestore
            const q = query(collection(db, "users"), where ("userID", "==", loginInformation?.uid))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                user = doc.data();
            })

            setUser(user);
        }
    },[loginInformation])

    return (
        <main>
            <h1>User Profile</h1>
            <UserProfileCard user={user} loginInformation={loginInformation} />
        </main>
    )
}