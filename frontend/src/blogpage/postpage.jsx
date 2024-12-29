import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PostDetail } from "./postpagedata";


export const Postpage = () => {
    const { id } = useParams();
    const [postinfo, setpostinfo] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const blogById = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_USER_API}/post/${id}`);
                setpostinfo(response.data.postdoc)
            } catch (error) {
                console.error('Error fetching blog by ID:', error);
            }
            finally {
                setloading(false);

            }
        };
        blogById();
    }, []);

    return (
        <div>
            {
                loading ?
                    <div className="flex justify-center items-center h-60">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-700 border-solid"></div>
                    </div>
                    : postinfo._id ?
                        <PostDetail {...postinfo} />
                        : <h1> invalid post id or post has been removed  </h1>
            }
        </div>
    )
}
