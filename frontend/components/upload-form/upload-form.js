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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function onClick() {
    async function postData() {
      const { title, description, img } = form;
      if (!title || !description || !img) {
        return;
      }
      setIsLoading(true);
      try {
        const data = new FormData();
        data.append("file", img);
        await axios.post("http://localhost:5000/image", data);
        await axios.post("http://localhost:5000/metadata", {
          ...form,
          fileName: img.name,
        });
      } catch (error) {
        console.error("error submitting data");
        console.error(error);
      }
      router.push("/");
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
        <div className={styles.fileInput}>
          <p className={styles.req}>Please, only add png or jpg.</p>
          <input
            type="file"
            name="Asset"
            className={styles.file}
            onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
          />
        </div>
        <Button variant="contained" onClick={onClick}>
          ADD IMAGE
        </Button>
        {isLoading && <div className={styles.spinner} />}
      </form>
    </div>
  );
}
