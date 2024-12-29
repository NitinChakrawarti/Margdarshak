import { Blogcard } from "./blogcard";
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useContext, useState } from "react";
import { PostContext } from '../context/backcontext';
import axios from "axios";

export const Blog = () => {
    const postcontext = useContext(PostContext);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_USER_API}/post/get-all-post`
                );
                postcontext.setpost(response.data.data); // Assuming the API returns posts in `response.data.data`

            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // Stop loading after fetching data

            }
        })();
    }, []);

    return (
        <>
            <div className="flex justify-between px-6 md:pr-10 mt-10 shadow-sm py-2">
                <h1 className="text-3xl font-bold">Blogs</h1>
                <Link
                    to="/addblog"
                    className="text-md flex justify-center items-center font-semibold border-yellow-700 border-2 rounded-full px-4 hover:shadow-lg hover:border-yellow-600 duration-300"
                >
                    Create new Post <CiCirclePlus className="ml-2 text-2xl" />
                </Link>
            </div>
            <div className="py-10">
                {/* Loading Spinner */}
                {loading ? (
                    <div className="flex justify-center items-center h-60">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-700 border-solid"></div>
                    </div>
                ) : (
                    // Blog Body
                    postcontext.post && postcontext.post.length > 0 ? (
                        postcontext.post.map((blog, index) => (
                            <Blogcard {...blog} key={index} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No blogs available</p>
                    )
                )}
            </div>
        </>
    );
};
