import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const DialogDemo = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className={`${styles.Button} violet`}>Edit profile</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.Overlay} />
			<Dialog.Content className={styles.Content}>
				<Dialog.Title className={styles.Title}>Edit profile</Dialog.Title>
				<Dialog.Description className={styles.Description}>
					Add your spends. Click save when you're done.
				</Dialog.Description>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="name">
						Value Spent
					</label>
					<input
						className={styles.Input}
						id="name"
						defaultValue="R$ 0.00"
                        type="number"
					/>
				</fieldset>
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="username">
						Data
					</label>
					<input
						className={styles.Input}
						id="username"
						defaultValue="Today"
                        type="date"
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

export default DialogDemo;
