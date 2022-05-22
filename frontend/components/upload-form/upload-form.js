import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "./upload-form.module.css";

export default function CreateItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: null,
  });
  const router = useRouter();

  function onClick() {
    async function postData() {
      const { title, description, img } = form;
      if (!title || !description || !img) {
        return;
      }
      try {
        const data = new FormData();
        data.append("file", img);
        await axios.post("http://localhost:5000/image", data);
        await axios.post("https://localhost:5000/metadata", {
          ...form,
          fileName: img.name,
        });
      } catch (error) {
        console.log("fetch error");
        console.log(error);
      }
    }
    postData();
  }

  return (
    <div className={styles.root}>
      <form className={styles.container}>
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
      </form>
    </div>
  );
}
