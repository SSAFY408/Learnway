import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AWS from "aws-sdk";

const Img = styled.img`
    width: ${(props) => props.width || "75px"};
    height: ${(props) => props.width || "75px"};
    border-radius: 50%;
`;

function ProfileImg(props) {
    const { tmpsrc, src, width } = props;

    // s3 bucket 이미지 읽어오기
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
        region: process.env.REACT_APP_S3_REGION,
    });
    const s3 = new AWS.S3();
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const params = {
            Bucket: "learnway",
            Key: `${src}`,
        };

        s3.getSignedUrlPromise("getObject", params, (err, url) => {
            if (err) {
                console.error(err);
                return;
            }

            setImageUrl(url);
            console.log(url);
        });
    }, []);

    // 이미지 편집에서 선택한 tmpImage있으면 그걸로 보여주기
    return tmpsrc ? (
        <Img src={tmpsrc} width={width} />
    ) : (
        <Img src={imageUrl} width={width} />
    );
}

export default ProfileImg;
