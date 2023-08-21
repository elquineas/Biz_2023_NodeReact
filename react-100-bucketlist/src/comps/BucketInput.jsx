const BucketInput = (props) => {
  const { bDto, saveBDto, saveBList, content, setContent, title, setTitle } =
    props;
  //   console.log(bDto);

  const titleChangeHandler = (e) => {
    const value = e.target.value;
    setTitle(value);
    saveBDto();
  };
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
    saveBDto();
  };

  const onBlurBucket = (e) => {
    if (title === "") {
    } else if (content === "") {
    } else {
      saveBList(bDto.id);
    }
  };

  return (
    <div className="bucket input">
      <div className="text_box">
        <input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={titleChangeHandler}
          onBlur={onBlurBucket}
        />
        <textarea
          placeholder="내용을 입력하세요"
          onChange={inputChangeHandler}
          value={content}
          onBlur={onBlurBucket}
        />
      </div>
      <div className="img_box">이미지</div>
    </div>
  );
};
export default BucketInput;
