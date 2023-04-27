import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { tokenId } = useParams();
  const [metadata, setMetadata] = useState();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);
  return (
    <div>
      {metadata ? (
        <>
          <img src={`${metadata.image}`} alt="" />
          <div>{`${metadata.name}`}</div>
          <div>
            {metadata.attributes.map((v, i) => {
              return (
                <div key={i} className="my-2">
                  <span>{v.trait_type}</span>
                  <span> : {v.value}</span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        "로딩중입니다"
      )}
    </div>
  );
};
export default Detail;
