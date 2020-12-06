import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "./firebase";
import firebase from "firebase";

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    //firebase uploading SDK
    //goes to firebase storage and creates a reference (ref) to a folder (creates a folder) called images/name-of-file-we-are-trying-to-upload
    //then grab the image and "put" it there.
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //event listener that keeps giving back snapshots of the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        //error funtion
        console.log(err);
        alert(err.message);
      },
      () => {
        //on complete function
        storage
          .ref("images") //go to images folder ref
          .child(image.name) //at this image
          .getDownloadURL() //get the url
          .then((url) => {
            //post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div>
		<progress value={progress} max="100"/>
      <input
        type="text"
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
        placeholder="Enter a caption"
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
