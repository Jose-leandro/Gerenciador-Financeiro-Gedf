import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/dialogIncome.module.sass";

const DialogSpends = ({ transactionsId, mode }) => {
	console.log(transactionsId)
  const [loading, setLoading] = React.useState(false);
  const [spend, setSpend] = React.useState(null);

  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [statusSpend, setStatusSpend] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  // Fetch spend data for editing
  React.useEffect(() => {
    if (mode === "edit" && transactionsId) {
		console.log(mode+ "- Thsi it's the mode")
      setLoading(true);
      fetch(`https://gedf-backend.onrender.com/api/get/spend/${transactionsId}?userId=1`)
        .then((res) => res.json())
        .then((data) => {
          setSpend(data);
          setAmount(data.value);
          setDate(data.date.slice(0, 10));
          setCategory(data.category || '');
          setStatusSpend(data.statusSpend || '');
          setDescription(data.description);
        })
        .catch((err) => console.error("Error fetching spend:", err))
        .finally(() => setLoading(false));
    }
  }, [transactionsId, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spendData = {
      value: parseFloat(amount),
      date,
      category,
      statusSpend,
      description,
      people: "leandro",
      userId: "1",
    };

    try {
      const method = mode === "edit" ? "PUT" : "POST";
      const url =
        mode === "edit"
          ? `https://gedf-backend.onrender.com/api/spends/${spend.id}`
          : `https://gedf-backend.onrender.com/api/spends?userId=1`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(spendData),
      });

      if (!res.ok) throw new Error("Failed to save spend");

      setSuccessMessage("Spend saved successfully!");
      setTimeout(() => setSuccessMessage(""), 4000);

    } catch (err) {
      console.error("Save error:", err.message);
    }
  };

  const handleDelete = async () => {
    if (!spend.id) return;

    try {
      const res = await fetch(`https://gedf-backend.onrender.com/api/spends/delete/${transactionsId}?userId=1`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setSuccessMessage("Spend deleted!");
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} violet`}>
          {mode === "edit" ? "Edit Spend" : "Add Spend"}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>
            {mode === "edit" ? "Edit Spend" : "Add New Spend"}
          </Dialog.Title>

          {successMessage && (
            <p className={styles.SuccessMessage}>{successMessage}</p>
          )}

          {loading ? (
            <p>Loading spend data...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset className={styles.Fieldset}>
                <label htmlFor="amount">Amount (R$)</label>
                <input
				className={styles.Input}
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
				className={styles.Input}
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
				className={styles.Input}
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </fieldset>

              <fieldset className={styles.Fieldset}>
                <label htmlFor="statusSpend">Status</label>
                <input
				className={styles.Input}
                  type="text"
                  id="statusSpend"
                  value={statusSpend}
                  onChange={(e) => setStatusSpend(e.target.value)}
                />
              </fieldset>

              <fieldset className={styles.Fieldset}>
                <label htmlFor="description">Description</label>
                <input
				className={styles.Input}
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </fieldset>

              <div className={styles.separator}></div>

              <div className={styles.Actions}>
                  <button type="submit" className={styles.Button__save}>
                    Save
                  </button>
                

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

export default DialogSpends;
