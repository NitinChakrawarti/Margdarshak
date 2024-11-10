import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
const Chats = () => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState({});

    const mentors = useSelector(state => state.mentors);

    const handleSendMessage = () => {
        if (message.trim() && selectedMentor) {
            setChatHistory(prevHistory => ({
                ...prevHistory,
                [selectedMentor.id]: [
                    ...(prevHistory[selectedMentor.id] || []),
                    { sender: 'me', text: message }
                ]
            }));
            setMessage('');
        }
    };

    const openChat = (mentor) => {
        setSelectedMentor(mentor);
    };

    return (
        <div className="flex flex-col md:flex-row-reverse h-[99%] bg-gray-50 mt-10 md:mt-0">
            {/* Mentors List */}
            <div className="bg-white md:bg-yellow-700 fixed top-0 pt-20 text-white p-4 md:h-full md:w-auto w-full">
                <h2 className="text-2xl font-bold mb-4 text-black md:text-white">Mentors</h2>
                {mentors.length > 0 ? (
                    <div className={`space-y-4 md:contents ${selectedMentor ? 'hidden' : 'contents'}`}>
                        {mentors.map((mentor) => (
                            <div
                                key={mentor.id}
                                onClick={() => openChat(mentor)}
                                className={`cursor-pointer p-3 rounded-lg ${selectedMentor?.id === mentor.id
                                    ? 'bg-white text-yellow-700'
                                    : 'bg-yellow-600 text-white'
                                    } hover:bg-white hover:text-yellow-700 transition`}
                            >
                                <h3 className="font-semibold">{mentor.name}</h3>
                                <p className="text-sm">{mentor.jobTitle}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-3 rounded-lg bg-white text-yellow-700">
                        <h3 className="font-semibold">No Mentors added</h3>
                        <p className="text-sm">Click here to explore mentors</p>
                    </div>
                )}
            </div>

            {/* Chat Section */}
            <div className={`flex-1 md:flex flex-col px-4 mr-72 md:h-full ${selectedMentor ? 'contents' : 'hidden'}`}>
                {selectedMentor ? (
                    <div className="h-[76vmax] md:h-full flex flex-col justify-between">
                        <div className="bg-gray-200 p-4 rounded-t-lg flex justify-between items-center">
                            <div className='flex gap-2 items-center w-full'>
                                <img src={selectedMentor.image} alt="" className='w-16 h-16 object-cover rounded-[100%]' />
                                <div className='flex items-center justify-between w-full'>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-700">
                                            Chat with {selectedMentor.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">{selectedMentor.jobTitle}</p>
                                    </div>
                                    <div className="md:hidden">
                                        <button
                                            onClick={() => setSelectedMentor(null)}
                                            className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 transition"
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4 px-4 md:contents hidden'>
                                <IoIosCall className="text-2xl text-yellow-700" />
                                <FaVideo className="text-2xl text-yellow-700 ml-4" />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto bg-white p-4 border rounded-b-lg space-y-3">
                            {chatHistory[selectedMentor.id]?.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`${chat.sender === 'me' ? 'text-right' : 'text-left'}`}
                                >
                                    <p
                                        className={`inline-block px-4 py-2 rounded-lg ${chat.sender === 'me'
                                            ? 'bg-yellow-700 text-white'
                                            : 'bg-gray-200 text-black'
                                            }`}
                                    >
                                        {chat.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center w-full border-t p-2 md:relative fixed bottom-4">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-yellow-700"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="ml-4 px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 transition"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center flex-1">
                        <p className="text-gray-500 text-lg">Select a mentor to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chats;
