import React from "react";

export default function ActionsBtns(DateEdit){
    const [transactions, setTransactions] = useState([]);
        const [error, setError] = useState(null);
    
        useEffect(() => {
          const fetchDashboard = async () => {
            try {
          
              const res = await fetch(`https://gedf-backend.onrender.com/edit?userId=1`);
        
              if (!res.ok) {
                throw new Error("Failed to edit data");
              }
        
              const data = await res.json();
        
        
              setTransactions(data)
              
              console.log("Response status:", res.status);
            } catch (err) {
              console.error("❌ fetch error:", err);
              setError("Failed to Edit Transaction");
            }
          };
        
          fetchDashboard();
        }, []);
        
    return (
         <div className="actions">
          <button
            className="btn edit-btn"
            title="Edit this transaction"
            aria-label="Edit this transaction"
            >
            ✏️ Edit
            </button>
        </div>                      
    )
}