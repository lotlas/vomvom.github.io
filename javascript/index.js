const onSubmitContactForm = () => {
  var rtn;
  rtn = confirm("메일을 보내시겠습니까?");

  if(rtn) {
    setTimeout(() => {
      alert("성공적으로 전송됐습니다!\n감사합니다.")
    }, 1000);
  } else {
    return false;
  }
};
