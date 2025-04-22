import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/dialogIncome.module.sass";

const DialogIncome = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className={`${styles.Button} violet`}>Add Income</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.Overlay} />
			<Dialog.Content className={styles.Content}>
				<Dialog.Title className={styles.Title}>Add your New Income</Dialog.Title>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="Amount">
						Amount in R$
					</label>
					<input
						className={styles.Input}
						id="Amount"
						defaultValue="R$ 0.00"
                        type="number"
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
					/>
				</fieldset>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="category">
						Category
					</label>
					<input
						className={styles.Input}
						id="category"
						defaultValue="Add The Description Of You Spend"
                        type="text"
					/>
				</fieldset>
                <fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="username">
						Description
					</label>
					<input
						className={styles.Input}
						id="username"
						defaultValue="Add The Description Of You Spend"
                        type="text"
					/>
				</fieldset>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className={`${styles.Button} green`}>Save changes</button>
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
);

export default DialogIncome;
