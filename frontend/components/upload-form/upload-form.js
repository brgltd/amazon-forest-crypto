import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./upload-form.module.css";

export default function CreateItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: null,
  });
  const router = useRouter();

  function onClick() {
    // console.log(form);

    async function postData() {
      if (!form.title || !form.description || !form.img) {
        return;
      }
      try {
        console.log("calling fetch");
        const res = await fetch("http://localhost:5001/image", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ k: "v" }),
        });
        console.log("res");
        console.log(res);
      } catch (error) {
        console.log("fetch error");
        console.log(error);
      }
    }

    postData();
  }

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
            onChange={(e) => setForm({ ...form, title: e.target.value })}
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
          onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
        />
        <Button variant="contained" onClick={onClick}>
          ADD IMAGE
        </Button>
      </div>
    </div>
  );
}
