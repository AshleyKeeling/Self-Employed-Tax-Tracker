import { useState } from "react";

export const useTaxRecord = () => {
    const [taxRecord, setTaxRecord] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getTaxRecord = async (userID, token) => {
        setLoading(true);
        setError(null);

        try {
            console.log("here")
            const response = await fetch(`/api/taxRecord/${userID}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                setError(data.error || "Failed to fetch");
                setLoading(false);
                return;
            }

            setTaxRecord(data);
            localStorage.setItem("taxRecord", JSON.stringify(data));
        } catch (err) {
            setError("Network error");
        }

        setLoading(false);
    };

    return { taxRecord, loading, error, getTaxRecord };
};