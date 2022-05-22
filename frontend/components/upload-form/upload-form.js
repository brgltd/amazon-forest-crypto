import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./upload-form.module.css";

export default function CreateItem() {
  const [form, setForm] = useState({
    price: "",
    description: "",
  });
  const router = useRouter();

  async function onChange(e) {}

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <TextField
            label="Title"
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
        </div>
        <textarea
          placeholder="Description"
          className={styles.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className={styles.file}
          onChange={onChange}
        />
        <Button variant="contained">ADD IMAGE</Button>
      </div>
    </div>
  );
}
