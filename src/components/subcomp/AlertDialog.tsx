import React, { useRef, useState } from "react";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function DeclarativeDemo(props: {
  selected: string;
  active: boolean;
  setActive: any;
}) {
  const { selected, active, setActive } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const toast = useRef<Toast>(null);
  const buttonEl = useRef<any>(null);

  const accept = () => {
    console.log("accept");
    setActive(false)
    toast.current?.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    console.log("reject");
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmPopup
        target={buttonEl.current}
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
      <div className="card flex justify-content-center">
        <input
          className="bg-slate-400"
          value="???"
          type="button"
          ref={buttonEl}
          onClick={() => setVisible(true)}
        />
      </div>
    </>
  );
}
