import uuid from "react-uuid";
const sampleBucketList = ["개발자되기", "React Master", "Spring Master"];

export const bucketLoader = () => {
  /**
   * bucket을 key로 하고 sampleBucketList 를 데이터로 담아서 JSON 타입으로 return
   */
  return { bucketList: sampleBucketList };
};

export const bucketAction = () => {
  console.log("action");
  return sampleBucketList.push(uuid());
};
