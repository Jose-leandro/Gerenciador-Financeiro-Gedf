import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/DialogAddCategory.module.scss";

const DialogAddCategory = ({ userId = 1, onSuccess }) => {
  const [name, setName] = React.useState("");
  const [subcategories, setSubcategories] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required");
      return;
    }

    const payload = {
      name,
      subcategories: subcategories,
      userId,
    };

    try {
      const res = await fetch("https://gedf-backend.onrender.com/api/categories?userId=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save category");

      setName("");
      setSubcategories("");
      onSuccess?.(); // Optional callback
      alert("Category added successfully!");
    } catch (err) {
      console.error("Add category error:", err.message);
      alert("Error adding category");
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} violet`}>Add New Category</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>Add Category</Dialog.Title>
          <Dialog.Description className={styles.Description}>
            Fill in the category and optional subcategories.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="name">
                Name of Category
              </label>
              <input
                className={styles.Input}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="subcategories">
                Subcategories (comma-separated)
              </label>
              <input
                className={styles.Input}
                id="subcategories"
                value={subcategories}
                onChange={(e) => setSubcategories(e.target.value)}
                placeholder="e.g. Groceries, Restaurants"
              />
            </fieldset>

            <div
              style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
            >            
                <button type="submit" className={`${styles.Button} green`}>
                  Save Category
                </button>
            </div>
          </form>

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

export default DialogAddCategory;
