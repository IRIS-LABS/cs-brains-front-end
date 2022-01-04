import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

const MyAvatarUploader = () => {
    const [preview, setPreview] = useState(null);
    const [src, setSRC] = useState();

    const handleBeforeFileLoad = elem => {
        if (elem.target.files[0].size > 10901904) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }

    return (
        <>
            <Avatar
                width={300}
                height={300}
                onCrop={preview => setPreview(preview)}
                onClose={() => setPreview(null)}
                onBeforeFileLoad={handleBeforeFileLoad}
                onFileLoad={file => console.log(file)}
                src={src}

                labelStyle={{ color: "white" }}
            />
        </>
    );
};

export default MyAvatarUploader;
