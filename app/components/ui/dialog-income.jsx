import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/dialogIncome.module.sass";

const DialogIncome = ({ incomeId, mode = "create", onSave, onDelete }) => {
 const [loading, setLoading] = React.useState(false);
const [income, setIncome] = React.useState(null);

  const [amount, setAmount] = React.useState(income.value || '');
  const [date, setDate] = React.useState(income.date || '');
  const [category, setCategory] = React.useState(income.category || '');
  const [description, setDescription] = React.useState(income.description || '');
  const [successMessage, setSuccessMessage] = React.useState('');

   React.useEffect(() => {
    if (mode === "edit" && incomeId) {
      setLoading(true);
      fetch(`https://gedf-backend.onrender.com/api/income/${incomeId}`)
        .then((res) => res.json())
        .then((data) => {
          setIncome(data);
          setAmount(data.value);
          setDate(data.date.slice(0, 10)); // only yyyy-mm-dd
          setCategory(data.category);
          setDescription(data.description);
        })
        .catch((err) => console.error("Error fetching income:", err))
        .finally(() => setLoading(false));
    }
  }, [incomeId, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const incomeData = {
      value: parseFloat(amount),
      date,
      category,
      description,
      people: "leandro",
      userId: "1",
    };

    try {
      const method = mode === "edit" ? "PUT" : "POST";
      const url =
        mode === "edit"
          ? `https://gedf-backend.onrender.com/api/income/${income.id}`
          : `https://gedf-backend.onrender.com/api/income?userId=1`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(incomeData),
      });

      if (!res.ok) throw new Error("Failed to save income");

      setSuccessMessage("Income saved successfully!");
      setTimeout(() => setSuccessMessage(""), 4000);

      onSave?.(); // Optional callback
    } catch (err) {
      console.error("Save error:", err.message);
    }
  };

  const handleDelete = async () => {
    if (!income.id) return;

    try {
      const res = await fetch(`https://gedf-backend.onrender.com/api/income/${income.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setSuccessMessage("Income deleted!");
      setTimeout(() => setSuccessMessage(""), 4000);

      onDelete?.(); // Optional callback
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} violet`}>
          {mode === "edit" ? "Edit Income" : "Add Income"}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>
            {mode === "edit" ? "Edit Income" : "Add New Income"}
          </Dialog.Title>

          {successMessage && (
            <p className={styles.SuccessMessage}>{successMessage}</p>
          )}

          {loading ? (
			<p>Loading income data...</p>
			) : (
          <form onSubmit={handleSubmit}>
            <fieldset className={styles.Fieldset}>
              <label htmlFor="amount">Amount (R$)</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </fieldset>

            <div className={styles.separator}></div>

            {/* Save and Delete Buttons */}
            <div className={styles.Actions}>
              <Dialog.Close asChild>
                <button type="submit" className={styles.Button__save}>
                  Save
                </button>
              </Dialog.Close>

              {mode === "edit" && (
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className={styles.Button__delete}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </Dialog.Close>
              )}
            </div>
          </form>
		  )}

          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogIncome;
