import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/DropdownMenuDemo.module.scss";

const DropdownMenuAcconts = ({ acconts }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.IconButton} aria-label="Acconts">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content} sideOffset={5}>
          {acconts.map((cat) => (
            <DropdownMenu.Sub key={cat.name}>
              <DropdownMenu.SubTrigger className={styles.SubTrigger}>
                {cat.name}
                <div className={styles.RightSlot}>
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
            </DropdownMenu.Sub>
          ))}

          <DropdownMenu.Separator className={styles.Separator} />
          <DropdownMenu.Arrow className={styles.Arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuAcconts;
