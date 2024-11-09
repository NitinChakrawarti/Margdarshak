import React, { useState } from 'react';


const mentors = [
    { id: 1, name: 'Alex Johnson', jobTitle: 'Senior Software Engineer' },
    { id: 2, name: 'Maria Gonzalez', jobTitle: 'Data Scientist' },
    { id: 3, name: 'John Smith', jobTitle: 'Product Manager' },
    { id: 4, name: 'Sara Clark', jobTitle: 'UX Designer' },
    { id: 5, name: 'Chris Lee', jobTitle: 'Software Engineer' },
];

const Chats = () => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState({});
    const [chatmessage, setChatmessage] = useState(false);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newChatHistory = { ...chatHistory };
            if (!newChatHistory[selectedMentor.id]) newChatHistory[selectedMentor.id] = [];
            newChatHistory[selectedMentor.id].push({ sender: 'me', text: message });
            setChatHistory(newChatHistory);
            setMessage('');
        }
    };


    const openChat = (mentor) => {
        setSelectedMentor(mentor);
        setChatmessage(true);
    };

    return (
        <div className="flex flex-col  lg:flex-row-reverse h-[99%] bg-gray-50 mt-10 md:mt-0">
            <div className=" bg-white md:bg-yellow-700 fixed top-0 pt-20 text-white p-4 lg:h-full md:w-auto w-full ">
                <h2 className="text-2xl font-bold mb-4 text-black md:text-white">Messages</h2>
                <div className={`space-y-4 md:contents ${chatmessage ? "hidden" : "contents"} `}>
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
            </div>

            <div className={`flex-1 md:flex flex-col px-4 mr-60 md:h-full   ${chatmessage ? "contents" : "hidden"} `}>
                {selectedMentor ? (
                    <div className='h-[76vmax] md:h-full flex flex-col justify-between'>

                        <div className={`bg-gray-200 p-4 rounded-t-lg flex justify-between items-center `}>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">
                                    Chat with {selectedMentor.name}
                                </h2>
                                <p className="text-sm text-gray-500">{selectedMentor.jobTitle}</p>
                            </div>
                            <div className='md:hidden '>
                                <button
                                    onClick={() => {
                                        setSelectedMentor(null);
                                        setChatmessage(false);
                                    }}
                                    className="px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Back
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto bg-white p-4 border rounded-b-lg space-y-3">
                            {chatHistory[selectedMentor.id] && chatHistory[selectedMentor.id].map((chat, index) => (
                                <div
                                    key={index}
                                    className={`${chat.sender === 'me' ? 'text-right' : 'text-left'
                                        }`}
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
                        <div className="mt-4 flex items-center  w-full border-t p-2 md:relative fixed bottom-4 ">
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
