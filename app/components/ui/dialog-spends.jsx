import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/dialogIncome.module.sass";

const DialogSpends = () => {
  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [successMessage, setSuccessMessage] = React.useState('');


const handleSubmit = async (e) => {
  e.preventDefault();

  const spendsData = {
    value: parseFloat(amount),
    date,
    category,
    description,
	people: "leandro",
	 userId: "1",
  };

  console.log("Sending spendsData:", spendsData);

  try {
    const res = await fetch('https://gedf-backend.onrender.com/api/spends?userId=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(spendsData),
    });

    if (!res.ok) {
	setSuccessMessage('Spends saved successfully!');
	 setTimeout(() => setSuccessMessage(''), 5000); // clear after 5 sec
      const errorBody = await res.json();
      console.error("Backend error:", errorBody);
      throw new Error('Failed to submit Spends');

    }

    console.log('Spends submitted successfully');

    // Optional: Reset form
    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');

  } catch (err) {
    console.error('Error saving spends:', err.message);
  }
};

	return (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className={`${styles.Button} violet`}>Add Spends</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.Overlay} />
			<Dialog.Content className={styles.Content}>
				<Dialog.Title className={styles.Title}>Add your New Spends</Dialog.Title>
				<div className={styles.separator}></div>
				{successMessage && (
					<p
						style={{
						color: 'green',
						position: 'absolute',
						top: '60px',
						left: '50%',
						transform: 'translateX(-50%)',
						backgroundColor: '#e6ffe6',
						padding: '8px 16px',
						borderRadius: '8px',
						boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
						fontWeight: 'bold'
						}}
					>
						{successMessage}
					</p>
				)}

				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="Amount">
						Amount in R$
					</label>
					<input
						className={styles.Input}
						id="Amount"
						defaultValue="R$ 0.00"
                        type="number"
						 onChange={(e) => setAmount(e.target.value)}
					/>
				</fieldset>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="data">
						Data
					</label>
					<input
						className={styles.Input}
						id="data"
						defaultValue="Today"
                        type="date"
						onChange={(e) => setDate(e.target.value)}
					/>
				</fieldset>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="category">
					</label>
					<input
						className={styles.Input}
						id="category"
						defaultValue="Add The Category Of You Spends"
                        type="text"
						onChange={(e) => setCategory(e.target.value)}
						/>
				</fieldset>
                <fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="username">
						Description
					</label>
					<input
						className={styles.Input}
						id="username"
						defaultValue="Add The Description Of You Spends"
                        type="text"
						onChange={(e) => setDescription(e.target.value)}
						/>
				</fieldset>

				<div className={styles.separator}></div>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className={`${styles.Button__save} green`} onClick={handleSubmit}>Save changes</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button className={styles.IconButton} aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
 )
}

export default DialogIncome;
