import styled from "styled-components";

const Clipboard = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          handleCopyClipBoard("모비들아 사랑해");
        }}
      >
        아이디 복사
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 34.4rem;
  height: 5.2rem;

  background-color: #235fff;
  color: white;
  border-radius: 8px;
  border-style: none;

  font-size: 1.8rem;
  cursor: pointer;
`;

export default Clipboard;
