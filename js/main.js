const switch_ = new Object(Switcher);
switch_.selector = document.querySelector("#root");
switch_.Create();
switch_.CallBack = () => {
  if (switch_.switchValue === true) {
    document.body.style.backgroundColor = "#363537";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
};
