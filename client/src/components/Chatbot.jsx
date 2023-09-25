import React, { Component } from 'react';
import profilelogo from "../assests/profilelogo.svg";
import Gear from "../assests/Gear.svg";
import Help from "../assests/Help.svg";
import Send_hor_fill from "../assests/Send_hor_fill.svg";

class Chatbot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userInput: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ userInput: e.target.value });
    }

    handleSendMessage = () => {
        const { userInput } = this.state;
        if (userInput.trim() !== '') {
            this.setState((prevState) => ({
                messages: [...prevState.messages, { text: userInput, sender: 'user' }],
                userInput: '',
            }));
        }
    }

    render() {
        return (
            <div className="flex h-screen">
                <div className="w-1/10 bg-gray-200 p-5 flex flex-col justify-end">
                    <img src={Gear} width={80} height={78} />
                    <img src={Help} width={80} height={78} />
                    <img src={profilelogo} width={80} height={78} />
                </div>


                <div className="mt-4 flex items-end w-full p-5">
                    <input
                        type="text"
                        className="flex-grow p-2 border rounded-l-lgl"
                        placeholder="Type your message..."
                        value={this.state.userInput}
                        onChange={this.handleInputChange}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg"
                        onClick={this.handleSendMessage}
                    >
                        <img src={Send_hor_fill} alt="" width={30} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Chatbot;
