import { format } from 'date-fns'
import { Link } from 'react-router-dom'


export const Blogcard = ({ _id, title, summary, content, cover, author, createdAt }) => {
    return (
        <>
            <div className="flex gap-2 lg:flex-row flex-col p-4 max-w-6xl shadow-sm ">
                <div className="lg:w-[30%] w-full">
                    <Link to={`/blog/${_id}`} >
                        <img
                            src={`${import.meta.env.VITE_IMAGES_API}/${cover}`}
                            alt=""
                            className="w-[90%] h-[10rem] object-cover mx-auto"
                        />
                    </Link>

                </div>
                <div className="lg:w-[60%] lg:mx-0 mx-6 md:mx-10">
                    <div>
                        <Link to={`/blog/${_id}`} >
                            <h1 className="text-4xl pb-2 font-bold">
                                {title}
                            </h1>
                        </Link>
                        <span className="text-white bg-yellow-700 px-2 mr-2"> {author.name} </span> <span className="text-black/50"> {format(new Date(createdAt), 'MMM d, yyyy HH:mm')} </span>
                    </div>

                    <div className="des mt-4">
                        {summary.split(" ").slice(0, 50).join(" ")}
                    </div>
                </div>
            </div>
        </>
    )
}
