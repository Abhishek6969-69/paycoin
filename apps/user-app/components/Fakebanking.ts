"use server";
import axios from "axios";

export default async function Fakebanking() {
    try {
        const response = await axios.get(`${process.env.BANKSERVER_URL || ""}/transactions`);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return null; // Handle errors properly
    }
}
