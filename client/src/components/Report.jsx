import React, { Component } from 'react';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            approximateDate: '',
            state: '',
            city: '',
            incidentLocation: '',
            additionalInformation: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    render() {
        return (
            <div className="container mx-auto p-4 bg-[#DBE6F6]">
                <button className="text-2xl font-bold rounded-full border-black">Complaint and Details</button>
                <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[#DBE6F6]">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category of Complaint
                        </label>
                        <select
                            className="w-full p-2 border rounded"
                            id="category"
                            name="category"
                            onChange={this.handleInputChange}
                            value={this.state.category}
                        >
                            <option value="">Select Category</option>
                            {/* Add your category options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="approximateDate">
                            Approximate Date
                        </label>
                        <input
                            className="w-full p-2 border rounded"
                            type="date"
                            id="approximateDate"
                            name="approximateDate"
                            onChange={this.handleInputChange}
                            value={this.state.approximateDate}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <select
                            className="w-full p-2 border rounded"
                            id="state"
                            name="state"
                            onChange={this.handleInputChange}
                            value={this.state.state}
                        >
                            <option value="">Select State</option>
                            {/* Add your state options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <select
                            className="w-full p-2 border rounded"
                            id="city"
                            name="city"
                            onChange={this.handleInputChange}
                            value={this.state.city}
                        >
                            <option value="">Select City</option>
                            {/* Add your city options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="incidentLocation">
                            Where did this incident occur?
                        </label>
                        <select
                            className="w-full p-2 border rounded"
                            id="incidentLocation"
                            name="incidentLocation"
                            onChange={this.handleInputChange}
                            value={this.state.incidentLocation}
                        >
                            <option value="">Select Location</option>
                            {/* Add your location options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInformation">
                            Additional Information
                        </label>
                        <textarea
                            className="w-full p-2 border rounded"
                            id="additionalInformation"
                            name="additionalInformation"
                            rows="4"
                            onChange={this.handleInputChange}
                            value={this.state.additionalInformation}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Report;
