const Switcher = {
  switchValue: false,
  created: false,
  selector: null,
  dott: null,
  background: null,
  CallBack: call => {
    call();
  },
  Create: () => {
    if (!Switcher.created) {
      const switchBackground = document.createElement("div");
      switchBackground.classList.add("switch");
      Switcher.selector.appendChild(switchBackground);
      Switcher.background = switchBackground;
      const switchDott = document.createElement("div");
      switchDott.classList.add("switch_dott");
      switchBackground.appendChild(switchDott);
      Switcher.dott = switchDott;
      Switcher.created = true;
      Switcher.CreateClickEvent(switchDott);
    }
  },
  CreateClickEvent: selector => {
    selector.addEventListener("click", () => {
      Switcher.Switch();
    });
  },

  Switch: () => {
    Switcher.switchValue = !Switcher.switchValue;
    Switcher.CallBack();
    if (Switcher.switchValue === true) {
      Switcher.background.classList.add("switch--active");
      Switcher.dott.classList.add("switch_dott--active");
    } else {
      Switcher.background.classList.remove("switch--active");
      Switcher.dott.classList.remove("switch_dott--active");
    }
  }
};
