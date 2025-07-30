import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import styles from "./../../../src/Sass/DropdownMenuDemo.module.scss";
import DialogAddCategory from "./DialogAddCategory";

const DropdownMenuCategories = ({ category, setCategory }) => {
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://gedf-backend.onrender.com/api/get/categories?userId=1");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Fetch categories error:", err.message);
      }
    };

    fetchCategories();
  }, []);

  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return <DialogAddCategory />;
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {/* Turn the trigger into an editable input */}
        <input
          className={styles.InputTrigger}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          aria-label="Select category"
          readOnly={false} // editable
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content} sideOffset={5}>
          {categories.map((cat, index) => (
            <DropdownMenu.Sub key={index}>
              <DropdownMenu.SubTrigger className={styles.SubTrigger}>
                {cat.name}
                <div className={styles.RightSlot}>
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>

              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className={styles.SubContent}
                  sideOffset={2}
                  alignOffset={-5}
                >
                  {cat.subcategory ? (
                    <DropdownMenu.Item
                      className={styles.Item}
                      onSelect={() =>
                        setCategory(`${cat.name} > ${cat.subcategory.name}`)
                      }
                    >
                      {cat.subcategory.name}
                    </DropdownMenu.Item>
                  ) : (
                    <DropdownMenu.Item className={styles.Item} disabled>
                      No subcategory
                    </DropdownMenu.Item>
                  )}
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          ))}

          <DropdownMenu.Separator className={styles.Separator} />

          <DropdownMenu.Item className={styles.Item}>
            <DialogAddCategory />
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={styles.Arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuCategories;
