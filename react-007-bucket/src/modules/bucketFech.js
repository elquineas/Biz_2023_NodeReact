import localforage from "localforage";
import uuid from "react-uuid";
import moment from "moment";

const LOCAL_DB = "BUCKET_LIST";

export const newBucketDto = () => {
  const bucketDto = {
    id: uuid(),
    img_src: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    bucket: "새로운 Bucket",
    complete: false,
  };
  return bucketDto;
};

export const getBucketList = async () => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  // if (!bucketList) {
  //   const bucketDto = newBucketDto();
  //   await setBucketList([bucketDto]);
  //   return [bucketDto];
  // }
  return bucketList;
};

export const getBucket = async (id) => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  const bucket = bucketList.find((item) => item.id === id);
  // 결과 값이 여러가지 falsy 값일 경우 모두 null 로 통일하여 return
  return bucket ?? null;
};

export const saveBucket = async (bucket) => {
  const bucketList = await getBucketList();
  const newBucketList = bucketList.map((item) => {
    if (item.id === bucket.id) {
      return bucket;
    } else {
      return item;
    }
  });
  await setBucketList(newBucketList);
};

export const newBucket = async () => {
  const bucketDto = newBucketDto();
  const bucketList = (await getBucketList()) || [];
  // JS 에서 기존 배열에 새로운 값을 추가하기
  // 배열.push(item) : 배열의 끝에 새로운 item 추가하기
  // 배열.unshift(item) : 배열의 앞에 새로운 item 추가하기
  bucketList?.unshift(bucketDto);
  await setBucketList(bucketList);
  return bucketDto;
};

export const deleteBucket = async (id) => {
  const bucketList = await getBucketList();
  const resultList = bucketList.filter((item) => item.id !== id);
  await setBucketList(resultList);
};

//browser 의 indexedDB에 BUCKETLIST 이름으로 데이터 저장
export const setBucketList = async (bucketList) => {
  // bucketList Data를 JSON Data로 업데이트
  return await localforage.setItem(LOCAL_DB, bucketList);
};
