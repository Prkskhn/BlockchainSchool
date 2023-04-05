const Input = () => {
  return (
    <div className="bg-green-100 min-w-full grow flex flex-col justify-center items-center">
      <div className="m-4">숫자를 입력해주세요</div>
      <div>
        <input type="text" />
        <button className="m-4">확인</button>
      </div>
    </div>
  );
};

export default Input;
