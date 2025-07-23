import React from "react";

export default function ActionBtnDelete(){
    const [transactions, setTransactions] = useState([]);
        const [error, setError] = useState(null);
    
        useEffect(() => {
          const fetchDashboard = async () => {
            try {
          
              const res = await fetch(`https://gedf-backend.onrender.com/delete?userId=1`);
        
              if (!res.ok) {
                throw new Error("Failed to fetch dashboard data");
              }
        
              const data = await res.json();
        
        
              console.log("✅ Dashboard data fetched:", data); // ✅ NOW you see the real dat
        
              setTransactions(data)
              
              console.log("Response status:", res.status);
            } catch (err) {
              console.error("❌ Dashboard fetch error:", err);
              setError("Failed to load dashboard");
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

                                <button
                                    className="btn delete-btn"
                                    title="Delete this transaction permanently"
                                    aria-label="Delete this transaction"
                                >
                                    🗑️ Delete
                                </button>
                            </div>                      
    )
}